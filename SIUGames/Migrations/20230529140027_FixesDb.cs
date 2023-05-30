using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SIUGames.Migrations
{
    /// <inheritdoc />
    public partial class FixesDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GameUser_Games_FavouriteGamesGameId",
                table: "GameUser");

            migrationBuilder.DropForeignKey(
                name: "FK_GameUser_Users_UsersUserId",
                table: "GameUser");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GameUser",
                table: "GameUser");

            migrationBuilder.DropIndex(
                name: "IX_GameUser_UsersUserId",
                table: "GameUser");

            migrationBuilder.RenameColumn(
                name: "UsersUserId",
                table: "GameUser",
                newName: "FavouriteGameId");

            migrationBuilder.RenameColumn(
                name: "FavouriteGamesGameId",
                table: "GameUser",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "Trailer",
                table: "Games",
                newName: "GameTrailer");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GameUser",
                table: "GameUser",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_GameUser",
                table: "GameUser");

            migrationBuilder.RenameColumn(
                name: "FavouriteGameId",
                table: "GameUser",
                newName: "UsersUserId");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "GameUser",
                newName: "FavouriteGamesGameId");

            migrationBuilder.RenameColumn(
                name: "GameTrailer",
                table: "Games",
                newName: "Trailer");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GameUser",
                table: "GameUser",
                columns: new[] { "FavouriteGamesGameId", "UsersUserId" });

            migrationBuilder.CreateIndex(
                name: "IX_GameUser_UsersUserId",
                table: "GameUser",
                column: "UsersUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_GameUser_Games_FavouriteGamesGameId",
                table: "GameUser",
                column: "FavouriteGamesGameId",
                principalTable: "Games",
                principalColumn: "GameId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GameUser_Users_UsersUserId",
                table: "GameUser",
                column: "UsersUserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
