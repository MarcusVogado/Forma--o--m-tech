const taskApi={}
taskApi.GetAllTasks= ()=>{
    const url = "https://localhost:7200/api/Tasks/"
    return fetch(url)
    .then((response)=> response.json())
    .then((jsonResult)=>jsonResult.tasks)   
}

