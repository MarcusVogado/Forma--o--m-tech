using Back_End_Estudos_Front_End.Models;
using Microsoft.AspNetCore.Mvc;

namespace Back_End_Estudos_Front_End.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TarefaController : ControllerBase
    {
        [HttpGet]
        public IActionResult ListaDeTarefas()
        {
            var tarefas = GetListaTarefas();

            return new JsonResult(new { tarefas = tarefas })
            {
                StatusCode = 200,
                ContentType = "application/json"
            };
        }
        public static List<Tarefa> GetListaTarefas()
        {
            var tarefas = new List<Tarefa>()
            {
                new Tarefa
                {
                    Id = 1,
                    Description="Estudar JavaScript",
                    IsCompleted=false,
                    DaysAndTimes = new DaysAndTimes[]{
                       new DaysAndTimes{DayOfWeek = DayOfWeek.Friday, StartTime=new TimeSpan(09,30,0), EndTime=new TimeSpan(11,30,0)},
                       new DaysAndTimes{DayOfWeek = DayOfWeek.Tuesday,StartTime= new TimeSpan(09,30,0), EndTime=new TimeSpan(11,30,0)},
                       new DaysAndTimes{DayOfWeek= DayOfWeek.Thursday, StartTime=new TimeSpan(16,30,0), EndTime=new TimeSpan(18,30,0)}
                    },
                },
                new Tarefa
                {
                        Id = 2,
                        Description="Estudar Inglês",
                        IsCompleted=false,
                        DaysAndTimes = new DaysAndTimes[] {
                           new DaysAndTimes{DayOfWeek=DayOfWeek.Friday, StartTime=new TimeSpan(08,0,0) , EndTime=new TimeSpan(9,10,0)},
                           new DaysAndTimes {DayOfWeek=DayOfWeek.Tuesday,StartTime= new TimeSpan(08,0,0),EndTime= new TimeSpan(9,10,0)},
                           new DaysAndTimes {DayOfWeek= DayOfWeek.Thursday,StartTime= new TimeSpan(13,30,0),EndTime= new TimeSpan(14,30,0)}
                        },
                },
                new Tarefa
                {
                       Id = 3,
                       Description = "Estudar HTML",
                       IsCompleted = true,
                       DaysAndTimes = new DaysAndTimes[]{
                          new DaysAndTimes {DayOfWeek= DayOfWeek.Friday, StartTime = new TimeSpan(13,0,0),EndTime= new TimeSpan(14,10,0)},
                          new DaysAndTimes {DayOfWeek= DayOfWeek.Tuesday, StartTime = new TimeSpan(13, 0, 0),EndTime= new TimeSpan(14, 10, 0)},
                          new DaysAndTimes {DayOfWeek= DayOfWeek.Thursday,StartTime = new TimeSpan(14, 40, 0),EndTime= new TimeSpan(16, 0, 0)}
                       }
                },
                new Tarefa
                {
                       Id = 3,
                       Description = "Estudar Algoritmos",
                       IsCompleted = true,
                       DaysAndTimes = new DaysAndTimes[]{
                          new DaysAndTimes {DayOfWeek= DayOfWeek.Friday, StartTime = new TimeSpan(13,0,0),EndTime= new TimeSpan(14,10,0)},
                          new DaysAndTimes {DayOfWeek= DayOfWeek.Tuesday, StartTime = new TimeSpan(13, 0, 0),EndTime= new TimeSpan(14, 10, 0)},
                          new DaysAndTimes {DayOfWeek= DayOfWeek.Thursday,StartTime = new TimeSpan(14, 40, 0),EndTime= new TimeSpan(16, 0, 0)}
                       }
                },
                new Tarefa
                {
                       Id = 4,
                       Description = "Estudar CSS",
                       IsCompleted = true,
                       DaysAndTimes = new DaysAndTimes[]{
                          new DaysAndTimes {DayOfWeek= DayOfWeek.Sunday, StartTime = new TimeSpan(13,0,0),EndTime= new TimeSpan(14,10,0)},
                          new DaysAndTimes {DayOfWeek= DayOfWeek.Wednesday, StartTime = new TimeSpan(13, 0, 0),EndTime= new TimeSpan(14, 10, 0)},
                          new DaysAndTimes {DayOfWeek= DayOfWeek.Friday,StartTime = new TimeSpan(14, 40, 0),EndTime= new TimeSpan(16, 0, 0)}
                       }
                },
                new Tarefa
                {
                       Id = 5,
                       Description = "Aulas Ímã Tech",
                       IsCompleted = true,
                       DaysAndTimes = new DaysAndTimes[]{
                          new DaysAndTimes {DayOfWeek= DayOfWeek.Monday, StartTime = new TimeSpan(19,0,0),EndTime= new TimeSpan(21,0,0)},
                          new DaysAndTimes {DayOfWeek= DayOfWeek.Wednesday, StartTime = new TimeSpan(19, 0, 0),EndTime= new TimeSpan(21, 0, 0)},
                          new DaysAndTimes {DayOfWeek= DayOfWeek.Friday,StartTime = new TimeSpan(19, 0, 0),EndTime= new TimeSpan(21, 0, 0)}
                       }
                }
            };
            return tarefas;
        }
    }
}

