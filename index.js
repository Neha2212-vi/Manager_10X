const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
require('./database/connection');
const classModel = require('./models/classModel');
const studentModel = require('./models/studentSchema');

dotenv.config({ path: "./.env" });
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.post('/myClass', async (req, res) => {
    const data = await classModel.insertMany(req.body);
    console.log(data);
    res.status(201).json(data);
});

app.post('/myClass/:myClassId/students', async (req, res)=>{
    const data = await studentModel.insertMany(req.body);
    console.log(data);
    res.status(201).json(data);
});

app.get('/myClass', async (req, res)=> {
    const Classes = await classModel.find();
    res.status(200).json({classes:Classes});
    console.log(Classes);
});

app.get('/myClass/:myClassId', async (req, res)=>{
    console.log(req.params)
    const data = await classModel.findOne({
        _id : req.params.myClassId
    });
    res.status(200).json(data);
});

app.get('/myClass/:myClassId/students', async (req, res)=>{
    const data = await studentModel.find();
    if(data){
        res.status(200).json(data);
    }else{
        res.status(404).json({
            error: "There are no students at this class"
        })
    }
});

app.get('/myClass/:myClassId/students/:studentId', async(req, res)=>{
    const data = await studentModel.findOne({
        _id : req.params.studentId
    });
    res.status(200).json(data);
});

app.put('/myClass/:myClassId/students/:studentId', async(req, res)=>{
    const data = await studentModel.updateOne({
        _id : req.params.studentId
    });
    res.status(200).json(data);
});

app.delete('/myClass/:myClassId', async(req, res)=>{
    const data = await classModel.deleteOne({
        _id : req.params.myClassId
    });
    if(data){
        res.status(204).json({
            message : "Deleted"
        });
    }else{
        res.status(404).json(
            { 
                error: "There is no task at that id"
            }
        )
     
    }
});

app.delete('/myClass/:myClassId/students/:studentId', async(req, res)=>{
    const data = await studentModel.deleteOne({
        _id : req.params.studentId
    });
    if(data){
        res.status(204);
    }else{
        res.status(404).json(
            { 
                error: "There is no task at that id"
            }
        )
     
    }
});

app.listen(PORT, console.log(`Server is up at ${PORT}`))