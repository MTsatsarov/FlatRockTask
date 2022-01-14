using System.IdentityModel.Tokens.Jwt;

namespace GameQuiz.Web.ViewModels
{
    public class UserModel
    {
        public JwtSecurityToken Token { get; set; }

        public string UserId { get; set; }

        public string Username { get; set; }
    }
}
