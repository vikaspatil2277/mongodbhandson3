const employee = require("./../Model/employee");

exports.allEmp = async(req,res)=>{
    const emp = await employee.find();
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
}

exports.empSalMore = async(req,res)=>{
    // const query = {"salary":{$gte:"30000"}};
    const query = {salary:{$gte:30000}};
    // const query ={department: 'Accounts'}

    console.log(query);
    // const emp = await employee.find(query);
   try {
    const emp = await employee.find(query);
    console.log(emp);
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
   } catch (error) {
    console.log(error);
   }
}


exports.empExpMore = async(req,res)=>{
    // const query = {"salary":{$gte:"30000"}};
    const query = {overallExp:{$gte:2}};
    

    console.log(query);
   try {
    const emp = await employee.find(query);
    console.log(emp);
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
   } catch (error) {
    console.log(error);
   }
}

exports.empLastCompY = async(req,res)=>{
    // const query = {"salary":{$gte:"30000"}};
    const query = {lastCompany:"Y"};
    

    console.log(query);
   try {
    const emp = await employee.find(query);
    console.log(emp);
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
   } catch (error) {
    console.log(error);
   }
}


exports.empGraduateExpMore = async(req,res)=>{
    // const query = {"salary":{$gte:"30000"}};
    const query = {overallExp:{$gt:1},yearGrad:{$gt:2015}};
    

    console.log(query);
   try {
    const emp = await employee.find(query);
    console.log(emp);
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
   } catch (error) {
    console.log(error);
   }
}

exports.empUpdateSal = async(req,res)=>{
    // const query = {"salary":{$gte:"30000"}};
    const query = {$set:{salary:65000}};
    const condition = {salary:{$gt:70000}}

    console.log(query);
   try {
    const emp = await employee.updateMany(condition,query);
    console.log(emp);
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
   } catch (error) {
    console.log(error);
   }
}


exports.empDeletComp = async(req,res)=>{
    // const query = {"salary":{$gte:"30000"}};
    const query = {lastCompany:"Y"};

    console.log(query);
   try {
    const emp = await employee.deleteMany();
    console.log(emp);
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
   } catch (error) {
    console.log(error);
   }
}