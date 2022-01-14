using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEndTask.Data.Migrations
{
    public partial class asnwerResultQuote : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Quote",
                table: "AnswersResults",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Quote",
                table: "AnswersResults");
        }
    }
}
