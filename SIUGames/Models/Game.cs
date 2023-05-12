using System.ComponentModel.DataAnnotations;

namespace SIUGames.Models
{
    public class Game
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "The game name is required.")]
        public string Name { get; set; }

        public byte[]? Picture { get; set; }

        public string? Developers { get; set; }

        public string? Description { get; set; }

        public string Tags { get; set; }

        [Range(1, 10, ErrorMessage = "The rating must be between 1 and 10.")]
        public double Rating { get; set; }
    }
}
