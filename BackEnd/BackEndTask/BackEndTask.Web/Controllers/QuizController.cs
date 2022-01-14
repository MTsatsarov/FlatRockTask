using BackEndTask.Services.InputModels;
using BackEndTask.Services.Services.QuizService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndTask.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuizController : ControllerBase
    {
        private readonly IQuizService quizService;

        public QuizController(IQuizService quizService)
        {
            this.quizService = quizService;

        }


        [Authorize]
        [Route("/quiz/create")]
        [HttpPost]

        public async Task<JsonResult> Create(QuizInputModel model)
        {
            await quizService.Create(model);
            return new JsonResult("Succesfully created Quiz");
        }

        [HttpGet]
        [Route("/quiz/all")]
        public JsonResult GetAll()
        {
            return new JsonResult(quizService.GetAll());
        }

        [HttpGet]
        [Route("/quiz/{id}")]
        public JsonResult ById([FromRoute] string id)
        {
            return new JsonResult(quizService.ById(id));
        }

        [HttpDelete]
        [Route("/quiz/{id}")]
        [Authorize]

        public async Task<JsonResult> Delete([FromRoute] string id)
        {
            await quizService.Delete(id);
            return new JsonResult("");
        }

        [HttpGet]
        [Route("/edit/{id}")]
        public  JsonResult GetModel([FromRoute] string id)
        {
            var result =  quizService.GetEditModel(id);
            return new JsonResult(result);

        }
    }
}
