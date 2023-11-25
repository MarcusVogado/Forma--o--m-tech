const taskApi={}
taskApi.GetAllTasks= ()=>{
    const url = "https://localhost:7200/api/Tarefa/"
    return fetch(url)
    .then((response)=> response.json())
    .then((jsonResult)=>jsonResult.tasks)   
}

