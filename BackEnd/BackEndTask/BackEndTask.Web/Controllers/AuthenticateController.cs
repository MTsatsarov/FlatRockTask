using GameQuiz.Web.InputModels;
using GameQuiz.Web.Services.UserService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;

namespace GameQuiz.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticateController : ControllerBase
    {
        public readonly IUserService userService;

        public AuthenticateController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> LoginUser( LoginUserInputModel model)
        {
            try
            {
                var result = await this.userService.Login(model);
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(result.Token),
                    expiration = result.Token.ValidTo,
                    userName = result.Username,
                    id = result.UserId
                });
            }
            catch (Exception ex)
            {
                return new JsonResult(new { error = ex.Message });

            }



        }


        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> RegisterUser(UserRegisterInputModel model)
        {

            try
            {
                await this.userService.Register(model);
                var result = await this.userService.Login(new LoginUserInputModel() { Username = model.Username, Password = model.Password });
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(result.Token),
                    expiration = result.Token.ValidTo,
                    userName = result.Username,
                    id = result.UserId
                });
            }
            catch (Exception ex)
            {
                return new JsonResult(new { error = ex.Message });
            }


        }
    }
}

