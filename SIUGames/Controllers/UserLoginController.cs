using Microsoft.AspNetCore.Mvc;
using SIUGames.Models;
using SIUGames.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SIUGames.Controllers
{
    [Route("[Controller]")]
    [ApiController]
    public class UserLoginController : Controller
    {
        private readonly AppDbContext _appDbContext;
        private readonly IConfiguration _configuration;

        public UserLoginController(AppDbContext appDbContext, IConfiguration configuration)
        {
            _appDbContext = appDbContext;
            _configuration = configuration;
        }


        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] UserLogin newUser)
        {
            User user = Authenticate(newUser);

/*            if(user==null)
            {
                return NotFound("User not found");
            }*/

            user.Token = GenerateToken(user);

            return Ok(user);
        }

        //TODO: Розібратись з всім :)
        private string GenerateToken(User user)
        {
            SymmetricSecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));

            SigningCredentials credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            Claim[] claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.UserName),
                new Claim(ClaimTypes.Email, user.Email)                           //If problem with login - uncomment
            };

            SecurityToken token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private User Authenticate(UserLogin userLogin)
        {
            User currentUser = null;

            User userName = _appDbContext.Users.FirstOrDefault(user => user.UserName == userLogin.UserName);

            if (userName == null)
            {
                throw new Exception("Incorrect UserName");
            }
            else
            {
                if (userName.Password != userLogin.Password)
                {
                    throw new Exception("Incorrect password");
                }
                else
                {
                    currentUser = userName;
                }
            }

            return currentUser;
        }

    }
}
