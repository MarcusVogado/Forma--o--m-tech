using Back_End_Estudos_Front_End.Models;
using Back_End_Estudos_Front_End.Repositories.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace Back_End_Estudos_Front_End.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {private readonly ITaskServices _taskServices;
        public TasksController(ITaskServices taskServices)
        {
            _taskServices = taskServices;
        }

        [HttpGet]
        public IActionResult ListaDeTarefas()
        {
            var tasks = _taskServices.GetAllTasks();

            return new JsonResult(new { tasks = tasks })
            {
                StatusCode = 200,
                ContentType = "application/json"
            };
        }  
    }
}

