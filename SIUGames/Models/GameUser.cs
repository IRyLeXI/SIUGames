using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace SIUGames.Models;

[Table("GameUser")]
public class GameUser
{
    [Key]
    public Guid ID { get; set; }

    public Guid UserId { get; set; }
   
    public Guid FavouriteGameId { get; set; }

}   
