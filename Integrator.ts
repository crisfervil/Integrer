import {Task} from "./Task";
import {DataTable} from "./DataTable";

export class Integrator {
  public static run(tasks:Task[]){
    var currentInput:DataTable=null;
    for(var i=0;i<tasks.length;i++){
      var currentTask = tasks[i];
      currentInput = currentTask.run(currentInput);
    }
  }
}
