using Microsoft.EntityFrameworkCore;
using SIUGames.Models;

namespace SIUGames.Data
{
    public class AppDbContext : DbContext
    {
       
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { 
            
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Game> Games { get; set; }

        public DbSet<GameUser> GameUsers { get; set; }
    }
}
