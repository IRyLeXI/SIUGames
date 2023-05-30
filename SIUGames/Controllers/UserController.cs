using Microsoft.AspNetCore.Mvc;
using SIUGames.Data;
using SIUGames.Models;
using System.Linq;

namespace SIUGames.Controllers
{
    [Route("[Controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly AppDbContext _appDbContext;

        public UserController(AppDbContext db) 
        {
            _appDbContext = db;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(List<User>))]
        public IActionResult GetUsers()
        {
            List<User> users = _appDbContext.Users.ToList();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(users);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(User))]
        public IActionResult GetUser(Guid id)
        {
            User user = _appDbContext.Users.FirstOrDefault(x => x.UserId == id);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (user == null)
            {
                return NotFound("User is not exist!");
            }

            return Ok(user);
        }

        [HttpGet("UserGames/{id}")]
        [ProducesResponseType(200, Type = typeof(List<Game>))]
        public IActionResult GetGames(Guid id)
        {
            var FavouriteGames = _appDbContext.GameUsers.Where(x => x.UserId == id).Select(x=>x.FavouriteGameId).Distinct().ToList();
            List<Game> Games = new List<Game>();
            foreach(var FavoriteGame in FavouriteGames)
            {
                Games.Add(GetGame(FavoriteGame));
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            /*if (FavouriteGames == null)
            {
                return NotFound("Games is not exist!");
            }*/

            return Ok(Games);
        }

        [HttpPost]
        [ProducesResponseType(400)]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public IActionResult CreateUser([FromBody] User newUser)
        {
            if (newUser == null)
            {
                return BadRequest(ModelState);
            }

            if (IsUserExist(newUser))
            {
                return BadRequest("This game is already exist!");
            }

            _appDbContext.Users.Add(newUser);
            if (!Save())
            {
                ModelState.AddModelError("", "Something went wrong while saving!");
                return StatusCode(500, ModelState);
            }

            return Ok(newUser);
        }

        [HttpPost("UserGames/{id}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public IActionResult AddFavGame([FromBody] GameUser newGame)
        {

            if (newGame == null)
            {
                return BadRequest(ModelState);
            }

            _appDbContext.GameUsers.Add(newGame);
            if (!Save())
            {
                ModelState.AddModelError("", "Something went wrong while saving!");
                return StatusCode(500, ModelState);
            }

            return Ok(newGame);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public IActionResult UpdateGame(Guid id, [FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest(ModelState);
            }

            if (!IsUserExistId(id))
            {
                return NotFound("User does not found!");
            }

            if (id != user.UserId)
            {
                return BadRequest(ModelState);
            }

            _appDbContext.Users.Update(user);
            if (!Save())
            {
                ModelState.AddModelError("", "Something went wrong while updating!");
                return StatusCode(500, ModelState);
            }

            return Ok(user);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(200)]
        public IActionResult DeleteGame(Guid id)
        {
            User user = _appDbContext.Users.FirstOrDefault(x => x.UserId == id);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (user == null)
            {
                return NotFound("Wafel!");
            }

            _appDbContext.Users.Remove(user);
            if (!Save())
            {
                ModelState.AddModelError("", "Something went wrong while deleting!");
                return StatusCode(500, ModelState);
            }

            return Ok("User deleted!");
        }

        private bool Save()
        {
            var saved = _appDbContext.SaveChanges();
            return saved > 0;
        }

        private bool IsUserExist(User user)
        {
            return _appDbContext.Users.Contains(user);
        }

        private bool IsUserExistId(Guid id) 
        {
            return _appDbContext.Users.Any(x => x.UserId == id);
        }

        private Game GetGame(Guid gameId)
        {
            return _appDbContext.Games.FirstOrDefault(x => x.GameId == gameId);
        }

    }
}
