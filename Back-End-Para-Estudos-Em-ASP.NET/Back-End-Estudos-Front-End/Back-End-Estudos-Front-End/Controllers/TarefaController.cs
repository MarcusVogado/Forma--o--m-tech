using Back_End_Estudos_Front_End.Models;
using Microsoft.AspNetCore.Mvc;

namespace Back_End_Estudos_Front_End.Controllers
{
    [Controller]
    [Route("api/[controller]")]
    public class TarefaController : ControllerBase
    {

        [HttpGet]
        public IActionResult ListaDeTarefas()
        {
            var tarefas = new List<Tarefa>()
            {
                new Tarefa { Id = 1, Description="Estudar Programação",IsCompleted=false},
                new Tarefa { Id = 2, Description="Estudar Inglês",IsCompleted=false},
                new Tarefa { Id = 3, Description="Criar uma API"}
            };
            return new JsonResult(tarefas);
        }
    }
}
