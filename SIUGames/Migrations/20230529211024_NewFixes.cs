using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SIUGames.Migrations
{
    /// <inheritdoc />
    public partial class NewFixes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "GameTrailer",
                table: "Games",
                newName: "Trailer");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Trailer",
                table: "Games",
                newName: "GameTrailer");
        }
    }
}
