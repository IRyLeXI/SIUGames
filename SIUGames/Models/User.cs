using System.ComponentModel.DataAnnotations;

namespace SIUGames.Models
{
    public class User
    {
        //public Guid Id { get; set; }

        public Guid UserId { get; set; }

        [Required(ErrorMessage = "The user name is required.")]
        [StringLength(30, MinimumLength = 2, ErrorMessage = "The customer name must be between 2 and 30 characters.")]
        public string UserName { get; set; }

        public byte[]? Avatar { get; set; }

        [Required(ErrorMessage = "The email address is required.")]
        [EmailAddress(ErrorMessage = "The email address is invalid.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "The password is required. Fill the password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public string? Description { get; set; }

        public string PreferedTags { get; set; }
        
        public Game? FavouriteGame { get; set; }

        public string? Token { get; set; }

    }
}
