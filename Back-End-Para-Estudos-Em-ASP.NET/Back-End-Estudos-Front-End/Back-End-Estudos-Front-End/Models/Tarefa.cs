namespace Back_End_Estudos_Front_End.Models
{
    public class Tarefa
    {
        public int Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public DaysAndTimes[] DaysAndTimes { get; set; } = null!;
        public bool IsCompleted { get; set; }

    }


    public class DaysAndTimes
    {
        public DayOfWeek DayOfWeek { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }

    }

}
