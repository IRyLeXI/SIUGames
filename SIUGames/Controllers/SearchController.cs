using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SIUGames.Data;
using SIUGames.Models;

namespace SIUGames.Controllers
{
    [Route("[Controller]")]
    [ApiController]
    public class SearchController : Controller
    {
        private readonly AppDbContext _appDbContext;

        public SearchController (AppDbContext db)
        {
            _appDbContext = db;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(List<Game>))]
        public IActionResult Search([FromQuery] SearchModel search)
        {
            if (search.words == null)
                search.words = "";
            Console.WriteLine("I am not valid");
            string tags = search.tags;
            if (!ModelState.IsValid)
            {
                Console.WriteLine("I am not valid");
                return BadRequest(ModelState);
            }
            string[] arrTags = tags != null? tags.Split(" #"): new string[]{ "Теги: "};
            var games = _appDbContext.Games.Where(item => item.Name.Contains(search.words)).ToList();
            List<Game> result = new List<Game>();
            if (arrTags.Length > 1)
            {
                foreach (var game in games)
                {
                    string[] gameTags = game.Tags.Split(" #");
                    int count = 0;
                    bool isDisplay = false;
                    foreach (string tag in gameTags)
                    {
                        foreach (string tag2 in arrTags)
                        {
                            if (tag2 == tag)
                            {
                                count++;
                                break;
                            }
                            
                        }
                        if (count == 2 || count == gameTags.Length || count==arrTags.Length - 1)
                        {
                            isDisplay = true;
                            break;
                        }
                    }
                    if(isDisplay)
                    {
                        result.Add(game);
                    }
                }
            }
            else
            {
                result = games;
            }
            return Ok(result);
        }
    }
}
