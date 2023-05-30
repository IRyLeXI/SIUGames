using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SIUGames.Migrations
{
    /// <inheritdoc />
    public partial class FixesDb2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_GameUser",
                table: "GameUser");

            migrationBuilder.AddColumn<Guid>(
                name: "ID",
                table: "GameUser",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_GameUser",
                table: "GameUser",
                column: "ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_GameUser",
                table: "GameUser");

            migrationBuilder.DropColumn(
                name: "ID",
                table: "GameUser");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GameUser",
                table: "GameUser",
                column: "UserId");
        }
    }
}
