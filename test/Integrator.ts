/// <reference path="../typings/main.d.ts"/>

import assert = require("assert");

import {Integrator} from "../Integrator";
import {Task} from "../Task";
import {DataTable} from "../DataTable";

describe('Integrator', function () {
  it('Runs Tasks',function (){

    var testData = new DataTable();
    testData.rows.push({col1:"val1",col2:"val2"},{col1:"val1",col2:"val2"});

    var task1:Task = {run:x=>testData};
    var task2:Task = {run:x=>{
                      // Make sure the input parameter is the value returned in the first task
                      assert.equal(testData,x,JSON.stringify(x));return x}};

    Integrator.run([task1,task2]);

  });
});
