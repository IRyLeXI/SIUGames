﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SIUGames.Data;
using SIUGames.Models;

namespace SIUGames.Controllers
{
    [Route("[Controller]")]
    [ApiController]
    public class GameController : Controller
    {
        private readonly AppDbContext _appDbContext;

        public GameController(AppDbContext db) 
        {
            _appDbContext = db;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(List<Game>))]
        public IActionResult GetGames()
        {
            List<Game> games = _appDbContext.Games.ToList();
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(games);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(Game))]
        public IActionResult GetGame(Guid id) 
        {
            Game game = _appDbContext.Games.FirstOrDefault(x => x.GameId == id);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if(game == null)
            {
                return NotFound("Game is not exist!");
            }
            return Ok(game);
        }

        [HttpPost]
        [ProducesResponseType(400)]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public IActionResult CreateGame([FromBody]Game newGame)
        {
            if(newGame==null)
            {
                return BadRequest(ModelState);
            }
            if(IsGameExist(newGame))
            {
                return BadRequest("This game is already exist!");
            }
            _appDbContext.Games.Add(newGame);
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
        public IActionResult UpdateGame(Guid id, [FromBody]Game game)
        {
            if (game==null)
            {
                return BadRequest(ModelState);
            }
            if (!IsGameExist(game))
            {
                return NotFound("Game does not found!");
            }
            if (id != game.GameId)
            {
                return BadRequest(ModelState);
            }
            //Game game2 = _appDbContext.Games.FirstOrDefault(x => x.Id == game.Id);
            _appDbContext.Games.Update(game);
            if (!Save())
            {
                ModelState.AddModelError("", "Something went wrong while updating!");
                return StatusCode(500, ModelState);
            }
            return Ok(game);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(200)]
        public IActionResult DeleteGame(Guid id)
        {
            Game game = _appDbContext.Games.FirstOrDefault(x => x.GameId == id);
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if(game==null)
            {
                return NotFound("Wafel!");
            }
            _appDbContext.Games.Remove(game);
            if (!Save())
            {
                ModelState.AddModelError("", "Something went wrong while deleting!");
                return StatusCode(500, ModelState);
            }
            return Ok("Game deleted!");
        }

        private bool Save()
        {
            var saved = _appDbContext.SaveChanges();
            return saved > 0;
        }

        private bool IsGameExist(Game game)
        {
            return _appDbContext.Games.Contains(game);
        }
    }
}
