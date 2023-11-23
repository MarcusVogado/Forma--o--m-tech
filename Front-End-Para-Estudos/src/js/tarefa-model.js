class Tarefa {
    id;
    description;
    isCompleted;
    dayOfWeek;
    startTime;
    endTime;
    daysAndTimes=[]
    constructor(id, description, isCompleted, dayOfWeek, startTime, endTime , daysAndTimes) {
        this.id = id;
        this.description = description;
        this.isCompleted = isCompleted;
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
        this.daysAndTimes=daysAndTimes;
    }
}

