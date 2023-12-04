//definición del DSL
class WorkflowDSL{
constrictor(){
    this.tasks = []
}

task (name, action){
    this.task.push({name, action})
}

run(){
    this.tasks.forEach((task) => {
        console.log(`Ejecutando tarea: ${task.name}`)
        task.action()
    })
    
}

}

//uso del DSL
const wrokflow = new WorkflowDSL()

//Definicion de tareas utilizando el DSL
wrokflow.task("tarea 1", () => {
    console.log("Realizando tarea 1")
})
wrokflow.task("tarea 2", () =>{
    console.log("Realizando tarea 2")
})
wrokflow.task("tarea 3", () => {
    console.log("Realizando tarea 3")
})
wrokflow.task("tarea 4", () => {
    console.log("Realizando tarea 4")
})
wrokflow.task("tarea 5", () => {
    console.log("Realizando tarea 5")
})

//Ejecutcion del flujo de trabajo utilizando el DSL
