# Project Description

Integrer is a tool for integrate different data sources using Node

# Install
Create a new directory to store your scripts

```
$ mkdir MyScripts
```

Then cd into it
```
$ cd MyScripts
```

Install Integrer

```
$  npm install integrer
```

# Usage

This Typescript example shows how to move data from a Dynamics CRM server to a SQL Server database

``` typescript
import {Integrator,CRMSource,OLEDBDestination} from "Integrer";


var source = new CRMSource("crmDev","account",{name:{like:"%contoso%"}});
var dest = new OLEDBDestination("myServer","myTable");
Integrator.run(source,dest);
```

# Requirements
Requires [Node.js](nodejs.org)

This library uses different connector to access different systems. Depending on the connector used the requirements may vary.

**Requirements for Dynamics CRM Connector:**
This connector is based in [DynamicsNode](https://github.com/crisfervil/DynamicsNode), that requires .NET Framework 4.5 to be installed.


# Backlog

* CRMSource,CRMDestination
* JSonSource,JSONDestination
* XmlSource,XmlDestination
* OLEDBSource,OLEDBDestintation
* ColumnTransformation
* CRMLookupTransformation
* CustomTransformation
* ExcelSource,ExcelDestination
* SharepointSource,SharepointDestination
* Add support for async Tasks and Progress
