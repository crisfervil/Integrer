import {DataTable} from "./DataTable";

export interface Task {
  // TODO: Add support for async tasks and progress
  run(input?:DataTable):DataTable;
}
