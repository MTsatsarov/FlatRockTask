using BackEndTask.Services.InputModels;
using BackEndTask.Services.Services.PlayService;
using BackEndTask.Services.Services.QuizService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndTask.Web.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/controller")]
    public class PlayController : ControllerBase
    {
        private readonly IplayService playService;

        public PlayController(IplayService playService)
        {
            this.playService = playService;
        }
        [HttpPost]
        [Route("/play/{id}")]
        public async Task<JsonResult> CheckAnswer( CheckAnswerInputModel model)
        {
            var result = await playService.CheckAnswer(model);

            return new JsonResult(result);
        }

        [HttpPost]
        [Route("/start/{id}")]
        public async Task<JsonResult> StartQuiz(StartModel model)
        {
            var result = await playService.StartQuiz(model);
            return new JsonResult(result);
        }
        [HttpGet]
        [Route("/result/{id}")]
        public async Task<JsonResult> GetResult(string id)
        {
            var result = await playService.GetResult(id);
            return new JsonResult(result);
        }

        [HttpGet]
        [Route("/myResults/{id}")]
        public JsonResult GetMyResults(string id)
        {
            var result =  playService.GetMyResults(id);
            return new JsonResult(result);
        }
        [HttpGet]
        [Route("/userResult/{id}")]
        public JsonResult GetSingleResults([FromRoute]string id)
        {
            var result = playService.GetAnswersPerResult(id);
            return new JsonResult(result);
        }

    }
}
