using Back_End_Estudos_Front_End.Models;
using Back_End_Estudos_Front_End.Repositories.Contracts;

namespace Back_End_Estudos_Front_End.Repositories.Services
{
    public class TaskServices : ITaskServices
    {
        public List<Tarefa> GetAllTasks()
        {
            var tasks = new List<Tarefa>()
            {
                new Tarefa
                {
                    Id = 1,
                    Description="Estudar JavaScript",
                    IsCompleted=false,
                    DaysAndTimes = new DaysAndTimes[]{
                        //Segunda
                       new DaysAndTimes
                       {
                           DayOfWeek = DayOfWeek.Monday,
                           StartTime=new TimeSpan(08,0,0),
                           EndTime=new TimeSpan(10,15,0)
                       },
                        //Terca
                       new DaysAndTimes
                       {
                           DayOfWeek = DayOfWeek.Tuesday,
                           StartTime= new TimeSpan(8,0,0),
                           EndTime=new TimeSpan(10,15,0)
                       },
                       //Quarta
                        new DaysAndTimes
                        {
                            DayOfWeek= DayOfWeek.Wednesday,
                            StartTime=new TimeSpan(8,0,0),
                            EndTime=new TimeSpan(10,15,0)
                        },
                       //Quinta
                       new DaysAndTimes
                       {
                           DayOfWeek= DayOfWeek.Thursday,
                           StartTime=new TimeSpan(8,0,0),
                           EndTime=new TimeSpan(10,15,0)
                       },
                        //Sexta
                         new DaysAndTimes
                       {
                           DayOfWeek= DayOfWeek.Friday,
                           StartTime=new TimeSpan(8,0,0),
                           EndTime=new TimeSpan(10,15,0)
                       }

                    }
                },
                new Tarefa
                {
                        Id = 2,
                        Description="Estudar HTML e CSS",
                        IsCompleted=false,
                        DaysAndTimes = new DaysAndTimes[]{
                        //Segunda
                       new DaysAndTimes
                       {
                           DayOfWeek = DayOfWeek.Monday,
                           StartTime=new TimeSpan(10,30,0),
                           EndTime=new TimeSpan(12,0,0)
                       },
                        //Terca
                       new DaysAndTimes
                       {
                           DayOfWeek = DayOfWeek.Tuesday,
                           StartTime=new TimeSpan(10,30,0),
                           EndTime=new TimeSpan(12,0,0)
                       },
                       //Quarta
                        new DaysAndTimes
                        {
                            DayOfWeek= DayOfWeek.Wednesday,
                            StartTime=new TimeSpan(10,30,0),
                           EndTime=new TimeSpan(12,0,0)
                        },
                       //Quinta
                       new DaysAndTimes
                       {
                           DayOfWeek= DayOfWeek.Thursday,
                           StartTime=new TimeSpan(10,30,0),
                           EndTime=new TimeSpan(12,0,0)
                       },
                        //Sexta
                         new DaysAndTimes
                       {
                           DayOfWeek= DayOfWeek.Friday,
                           StartTime=new TimeSpan(10,30,0),
                           EndTime=new TimeSpan(12,0,0)
                       }

                    }
                },
                new Tarefa
                {
                       Id = 3,
                       Description = "Estudar Algoritmos",
                       IsCompleted = true,
                       DaysAndTimes = new DaysAndTimes[]{
                        //Segunda
                       new DaysAndTimes
                       {
                           DayOfWeek = DayOfWeek.Monday,
                           StartTime=new TimeSpan(13,0,0),
                           EndTime=new TimeSpan(14,30,0)
                       },
                        //Terca
                       new DaysAndTimes
                       {
                           DayOfWeek = DayOfWeek.Tuesday,
                           StartTime=new TimeSpan(13,0,0),
                           EndTime=new TimeSpan(14,30,0)
                       },
                       //Quarta
                        new DaysAndTimes
                        {
                            DayOfWeek= DayOfWeek.Wednesday,
                            StartTime=new TimeSpan(13,0,0),
                            EndTime=new TimeSpan(14,30,0)
                        },
                       //Quinta
                       new DaysAndTimes
                       {
                           DayOfWeek= DayOfWeek.Thursday,
                           StartTime=new TimeSpan(13,0,0),
                           EndTime=new TimeSpan(14,30,0)
                       },
                        //Sexta
                         new DaysAndTimes
                       {
                           DayOfWeek= DayOfWeek.Friday,
                           StartTime=new TimeSpan(13,0,0),
                           EndTime=new TimeSpan(14,30,0)
                       }

                    }
                },
                new Tarefa
                {
                       Id = 3,
                       Description = "Estudar Inglês",
                       IsCompleted = true,
                       DaysAndTimes = new DaysAndTimes[]{
                        //Segunda
                       new DaysAndTimes
                       {
                           DayOfWeek = DayOfWeek.Monday,
                           StartTime=new TimeSpan(21,15,0),
                           EndTime=new TimeSpan(22,30,0)
                       },
                        //Terca
                       new DaysAndTimes
                       {
                           DayOfWeek = DayOfWeek.Tuesday,
                           StartTime=new TimeSpan(21,15,0),
                           EndTime=new TimeSpan(22,30,0)
                       },
                       //Quarta
                        new DaysAndTimes
                        {
                            DayOfWeek= DayOfWeek.Wednesday,
                            StartTime=new TimeSpan(21,15,0),
                            EndTime=new TimeSpan(22,30,0)
                        },
                       //Quinta
                       new DaysAndTimes
                       {
                           DayOfWeek= DayOfWeek.Thursday,
                           StartTime=new TimeSpan(21,15,0),
                           EndTime=new TimeSpan(22,30,0)
                       },
                        //Sexta
                         new DaysAndTimes
                       {
                           DayOfWeek= DayOfWeek.Friday,
                           StartTime=new TimeSpan(21,15,0),
                           EndTime=new TimeSpan(22,30,0)
                       }

                    }
                },
                new Tarefa
                {
                       Id = 4,
                       Description = "Estudar TypeScrip",
                       IsCompleted = true,
                       DaysAndTimes = new DaysAndTimes[]{
                        //Segunda
                       new DaysAndTimes
                       {
                           DayOfWeek = DayOfWeek.Monday,
                           StartTime=new TimeSpan(15,0,0),
                           EndTime=new TimeSpan(16,30,0)
                       },
                        //Terca
                       new DaysAndTimes
                       {
                           DayOfWeek = DayOfWeek.Tuesday,
                           StartTime=new TimeSpan(15,0,0),
                           EndTime=new TimeSpan(16,30,0)
                       },
                       //Quarta
                        new DaysAndTimes
                        {
                            DayOfWeek= DayOfWeek.Wednesday,
                            StartTime=new TimeSpan(15,0,0),
                            EndTime=new TimeSpan(16,30,0)
                        },
                       //Quinta
                       new DaysAndTimes
                       {
                           DayOfWeek= DayOfWeek.Thursday,
                           StartTime=new TimeSpan(15,0,0),
                           EndTime=new TimeSpan(16,30,0)
                       },
                        //Sexta
                         new DaysAndTimes
                       {
                           DayOfWeek= DayOfWeek.Friday,
                           StartTime=new TimeSpan(15,0,0),
                           EndTime=new TimeSpan(16,30,0)
                       }

                    }
                },
                new Tarefa
                {
                       Id = 5,
                       Description = "Aulas Ímã Tech",
                       IsCompleted = true,
                       DaysAndTimes = new DaysAndTimes[]{
                           //Segunda
                          new DaysAndTimes
                          {
                              DayOfWeek= DayOfWeek.Monday,
                              StartTime = new TimeSpan(19,0,0),
                              EndTime= new TimeSpan(21,0,0)},
                           //Quarta 
                          new DaysAndTimes
                          {
                              DayOfWeek= DayOfWeek.Wednesday,
                              StartTime = new TimeSpan(19, 0, 0),
                              EndTime= new TimeSpan(21, 0, 0)},
                           //Sexta
                          new DaysAndTimes
                          {
                              DayOfWeek= DayOfWeek.Friday,
                              StartTime = new TimeSpan(19, 0, 0),
                              EndTime= new TimeSpan(21, 0, 0)
                          }
                       }
                }
            };
            return tasks;
        }
    }
}

