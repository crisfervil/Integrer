var CRMSource = require("Integrer/CRMSource");
var JSONDestination = require("Integrer/JSONDestination");
var XmlDestination = require("Integrer/XmlDestination");
var OLEDBDestination = require("Integrer/OLEDBDestination");
var ExcelDestination = require("Integrer/ExcelDestination");
var ColumnTransformation = require("Integrer/ColumnTransformation");
var CustomTransformation = require("Integrer/CustomTransformation");
var CRMLookup = require("Integrer/CRMLookup");
var CRMLookupTransformation = require("Integrer/CRMLookupTransformation");
var Integrator = require("Integrer/Integrator");
var CRMConnection = require("Integrer/CRMConnection");

var crmDev = new CRMConnection("mycrm.com/myorg");
var source = new CRMSource(crmDev,"account",{name:{like:"%contoso%"}});
var dest = new JSONDestination("file.json",{name:"name",accountid:"accountid"}/*mappings*/);
Integrator.run(source,dest);


var source = new CRMSource("main","account",{name:{like:"%contoso%"}});

var transform = new ColumnTransformation({name:x=>x.name.toUpperCase(),
										  emptyColumn:null,
										  mainContactName:x=>CRMLookup(crmDev,"contact",{contactid:x.contactid},"name")});

var crmLookup = new CRMLookupTransformation(crmDev,"contact"/*source column*/,"contact"/*lookup entity*/,{contactid:x.contactid},"name");

var customTransform = new CustomTransformation(data=>{
	var result = new DataTable();
	/* Do whatever you want with the data and return another table */
	for(var i=0;i<data.rows.length;i++){
		// copy the iinput to the output
		result.rows.push(data.rows[i]);
	}
	return result;
});

var dest1 = new OLEDBDestination("myDb","myTable",{name:"name",accountid:"accountid"}/*mappings*/);
var dest2 = new XmlDestination("file.xml");

Integrator.run(source,transform,dest1,dest2);


interface DataTable{
	rows:[];
}

interface Task{
	Run(input?:DataTable, progress?:(x:number)=>void):DataTable
}
