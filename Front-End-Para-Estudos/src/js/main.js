
loadTasks(1)
let tarefas = taskApi.GetAllTasks()
console.log(tarefas)


function loadTasks(daySelect) {
    //Chamando a funçao de chamada da API
    taskApi.GetAllTasks().then(tasks => {
        let tasksDaySelect = []        
        //Filtrando as tasks de acordo com o dia selecionado
        tasks.map((task) => {
            task.daysAndTimes.map((day) => {
                if (day.dayOfWeek === daySelect) {
                    tasksDaySelect.push(new Tarefa(task.id, task.description, task.isCompleted, day.dayOfWeek, day.startTime, day.endTime, task.daysAndTimes))
                }
            })
        })                
        //Buscando o id do Elemento HTML onde a tabela com as tarefas serão inseridos
        let tarefasList = document.getElementById('table__body')
        tarefasList.innerHTML = ''
        //Ordenando a lista Pelo startTime das tarefas do menor para o maior
        tasksDaySelect.sort((a, b) => a.startTime.localeCompare(b.startTime))
        //Adicionando as tarefas ao HTML 
        tasksDaySelect.map((task) => {
            tarefasList.innerHTML += ` 
                <tbody id="table__body">
                    <tr>
                        <td class="body__item">
                            ${task.startTime}
                        </td>
                        <td class="body__item">
                        ${task.endTime}
                        </td class="body__item">
                        <td class="body__item">
                            ${task.description}
                        </td>
                        <td class="body__item daysWeek">                       
                        ${task.daysAndTimes.map((dia) => `<div class="body__item-dayOfWeek">
                        ${(() => {
                    switch (dia.dayOfWeek) {
                        case 1:
                            return "Segunda-Feira";
                        case 2:
                            return "Terça-Feira"
                        case 3:
                            return "Quarta-Feira"
                        case 4:
                            return "Quinta-Feira"
                        case 5:
                            return "Sexta-Feira"
                        case 6:
                            return "Sábado"
                        case 0:
                            return "Domingo"

                    }
                })()}
                       </div>`).join(' ')}
                        </td>
                    </tr>
                </tbody>
            </table>`
        })
    })
}






