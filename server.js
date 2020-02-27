var exp=require("express");
const app=exp();
const mc=require("mongodb").MongoClient;
var dbo;
const path=require("path");
app.use(exp.static(path.join(__dirname,'./dist/project')))
const dburl="mongodb://nagSS:nagSS@cluster0-shard-00-00-w71gd.mongodb.net:27017,cluster0-shard-00-01-w71gd.mongodb.net:27017,cluster0-shard-00-02-w71gd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mc.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},
    (error,client)=>{
        if(error){
            console.log("error in db connection",error);
        }else{
            dbo=client.db("sampledatabase");
            console.log("connected to db")
        }
    })
//nodemailer
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'raavinagasai999@gmail.com',
        pass: 'nagSS@184',  
    },
tls:{
    rejectUnauthorized:false
}
});
//to generate id

app.use(exp.json());
app.post('/save',(request,response)=>{ 
    console.log(request.body);
    dbo.collection("generateid").find({year:request.body.year,branch:request.body.branch}).toArray((error,count)=>{
        if(error){
            console.log(error);
            
        }
        else if(count.length>0){
            response.send({message:"id aleady generated"})
        }
        else{
            console.log(count.length);
            dbo.collection("generateid").insertOne(request.body,(error,success)=>{
                if(error){
                    console.log("err in save",error);
                }
                else{
                    response.send({message:"success"})
                }
            })
        }
    })
    
})

//to register
// app.use(exp.json());
// app.post('/register',(request,response)=>{ 
//     console.log(request.body);
//     dbo.collection("studentcollection").insertOne(request.body,(error,success)=>{
//         if(error){
//             console.log("err in save",error);
//         }
//         else{
//             response.send({message:"success"})
//         }
//     })
// })



//to read All data
app.get('/readAll/:branch',(request,response)=>{
    dbo.collection("studentcollection").find({branch:request.params.branch}).toArray((error,data)=>{
        if(error){
            console.log("err in reading",errorr)
        }
        else{
            response.send({message:data})
        }
    })
})

//to read student attendance logged in
app.get('/loggedinstudentattendence/:studentid',(request,response)=>{
    console.log(request.params.studentid);
    
    dbo.collection("attendence").find({studentid:request.params.studentid}).toArray((error,data)=>{
        if(error){
            console.log("err in reading")
        }
        else if(data===null)
        {
            response.send("no data found with the given student id")
           
        }
        else{
            response.send({message:data})
        }
    })
})
//to read yearwise
app.post('/readbyyear',(request,response)=>{
    console.log(request.body.year);
   yr=(+request.body.year);
    dbo.collection("studentcollection").find({year:yr,branch:request.body.branch}).toArray((error,data)=>{
        if(error){
            console.log("err in reading",errorr)
        }
        else if(data===null)
        {
            response.send("nodatafound")
           
        }
        else{
            console.log("data is",data);
            
            response.send({message:data})
        }
    })
})








//to update data    
app.put('/updatestudent',(request,response)=>{
   
    dbo.collection("studentcollection").updateOne({mobile:request.body.mobile},
        {$set:{firstname:request.body.firstname,
                lastname:request.body.lastname,
                gender:request.body.gender,
                email:request.body.email,  
                branch:request.body.branch,
                address:request.body.address,
                year:request.body.year,
                ssc:request.body.ssc,
                inter:request.body.inter}},
        (error,success)=>{
        if(error){
            console.log("err in updating",error)
        }
        else{
            response.send({message:"success"})
        }
    })
})

//to delete
app.delete('/deletestudent/:mobile',(request,response)=>{
    console.log(request.params);
    let no=(+request.params.mobile);
    dbo.collection("studentcollection").deleteOne({mobile:no},(error,success)=>{
        if(error){
            console.log("error in deleting",error);
        }
        else{
            response.send({message:"success"});
        }
    })
    
});
//to read ids
app.get('/saveid',(request,response)=>{
    dbo.collection("generateid").find().toArray((error,data)=>{
        if(error){
            console.log("err in reading",errorr)
        }
        else{
            response.send({message:data})
        }
    })
})
//register student handler (post)

app.use(exp.json());
app.post('/register',(request,response)=>{
    console.log(request.body);
   
 dbo.collection("generateid").find({year:request.body.year,branch:request.body.branch}).toArray((error,res)=>{
    let result=res[0];
    let length=res.length;   
    if(error){
         console.log("error in finding",error)
     }
     else if(length==0)
     {
        response.send({message:"generateid first"})
     }
     else{
        year=JSON.stringify(result.year);
        yearcode=year.split("");
        //console.log(year);
        console.log(result.branch)
        branch=result.branch;
        //console.log(branchname);
        ye=yearcode[2]+yearcode[3];
        
        id=(ye+branch+result.branchcode)
        console.log("id is",id);
        let ct=++result.count;
         if(result.count<=9){
            request.body.studentid=id+"00"+ct;
            request.body.password=id+"00"+ct
            console.log(request.body.studentid);
            console.log(request.body.password);
         }
         else if(result.count<=99)
         {
            request.body.studentid=id+"0"+ct ;
            request.body.password=id+"0"+ct
            console.log(request.body.studentid);
            console.log(request.body.password);
         }
         else{
            request.body.studentid=id+ct
            request.body.password=id+ct
            console.log(request.body.studentid);
            console.log(request.body.password);
            
            
         }
         dbo.collection("studentcollection").insertOne(request.body,(error,success)=>{
             console.log(request.body);
            if(error){
                console.log("error in insert",error) 
            }
            else{
                dbo.collection("generateid").updateOne({year:request.body.year,branch:request.body.branch},
                    {$set:{count:ct}},(error,suc)=>{
                        if(error){
                            console.log("error in update",error);
                            
                        }
                        else{
                            //mail sender for id nd password
                            const mailOptions = {
                                from:'raavinagasai999@gmail.com',
                                to:`email:${request.body.email}`,
                                subject: 'studentid and password',
                                text: `
                                Hello, ${request.body.firstname}
                                Welcome to FIU university...!!!!
                                we have successfully registered 
                                your profile in ${request.body.branch}
                                your studentid and password is 
                                ${request.body.studentid}
                                **note:studentid and password are 
                                same`
                            };
                            transport.sendMail(mailOptions, (error, info) => {
                                if (error) {
                                    console.log(error);
                                }
                            
                                // console.log(`Message sent:${info.response}`);
                                response.send({message:"success"})
                        
                            });
                        }
                    })
            }
        }) 
     }
 })
})

//for xcel sheets
//import require modules
const multer = require('multer');
const xlsxtojson=require("xlsx-to-json-lc");
const xlstojson=require("xls-to-json-lc");
//multers disk storage settings
var storage = multer.diskStorage({
 destination: function (req, file, cb) {
 cb(null, './attendencesheet/')
 },
 filename: function (req, file, cb) {
 var datetimestamp = Date.now();
 cb(null, `${new Date().getTime()}_${file.originalname}`)
 }
});
// upload middleware
const upload = multer({ storage: storage});
// convert excel to json route
app.post("/uploadattendence",upload.single('attendence'),(req,res)=>{
 if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
 exceltojson = xlsxtojson;
 } else {
 exceltojson = xlstojson;
 }
 try {
 exceltojson({
 input: req.file.path, //the same path where we uploaded our file
 output: null, //since we don't need output.json
 lowerCaseHeaders:true
 }, function(err,result){
 if(err) {
 return res.json({error_code:1,err_desc:err, data: null});
 }
 dbo.collection("attendence").insertMany(result, (err, data) => {
 console.log(data);
 res.json({error_code:0,err_desc:null, data:
data["ops"],"message":"Attendence Sheet uploaded successfully"});
 });

 });
 } catch (e){
 res.json({error_code:1,err_desc:"Corupted excel file"});
 }
 });


 //to get attendance data
 app.get('/readattendence',(request,response)=>{

    dbo.collection("attendence").find().toArray((error,data)=>{
        if(error){
            console.log("err in reading")
        }
        else if(data===null)
        {
            response.send({message:"no attendance data"})
           
        }
        else{
            console.log(data);
            
            response.send({message:data})
        }
    })
})
//login
app.post('/login',(request,response)=>{
    //readobject
    console.log(request.body);
    dbo.collection("studentcollection").findOne({studentid:request.body.id},(error,stuobj)=>{
        if(error){
            console.log("err in finding",error);
            
        }
        else if(stuobj==null){
            response.send({message:"invalid-studentid"})
        }
        else{
            if(request.body.password!==stuobj.password){
                response.send({message:"invalid-password"})
            }
            else{
                response.send({message:"successfull-login",name:stuobj})
            }
        }
    })
})

//to upload marks
//multers disk storage settings
var storagemarks = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './attendencesheet/')
    },
    filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, `${new Date().getTime()}_${file.originalname}`)
    }
   });
   // upload middleware
   const uploadmarks = multer({ storage:storagemarks});
   // convert excel to json route
   app.post("/uploadmarks",uploadmarks.single('marks'),(req,res)=>{
    if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
    exceltojson = xlsxtojson;
    } else {
    exceltojson = xlstojson;
    }
    try {
    exceltojson({
    input: req.file.path, //the same path where we uploaded our file
    output: null, //since we don't need output.json
    lowerCaseHeaders:true
    }, function(err,result){
    if(err) {
    return res.json({error_code:1,err_desc:err, data: null});
    }
    dbo.collection("marks").insertMany(result, (err, data) => {
    console.log(data);
    res.json({error_code:0,err_desc:null, data:
   data["ops"],"message":"marks Sheet uploaded successfully"});
    });
   
    });
    } catch (e){
    res.json({error_code:1,err_desc:"Corupted excel file"});
    }
    });
   

 //to get MARKS data
 app.get('/getmarks',(request,response)=>{

    dbo.collection("marks").find().toArray((error,data)=>{
        if(error){
            console.log("err in reading")
        }
        else if(data===null)
        {
            response.send({message:"no marks data"})
           
        }
        else{
            console.log(data);
            
            response.send({message:data})
        }
    })
})
//to read student attendance logged in
app.get('/loggedinstudentmarks/:studentid',(request,response)=>{
    console.log(request.params.studentid);
    
    dbo.collection("marks").find({studentid:request.params.studentid}).toArray((error,data)=>{
        if(error){
            console.log("err in reading")
        }
        else if(data===null)
        {
            response.send("no data found with the given student id")
           
        }
        else{
            response.send({message:data})
        }
    })
})

//forget 
app.post('/forgetpassword',(request,response)=>{
    console.log("email id is",request.body.email);
    dbo.collection("studentcollection").findOne({email:request.body.email},(error,data)=>{
        if(error){
            console.log("err in reading")
        }
        else if(data===null)
        {
            response.send("Please enter registered email id")
           
        }
        else{
            console.log("fghjk",data);
            //mail sender for id nd password
            const mailOptions = {
                from:'raavinagasai999@gmail.com',
                to:`email:${request.body.email}`,
                subject: 'studentid and password',
                text: `
                Hello, ${data.firstname}
                Welcome to FIU university...!!!!
                your password is 
                ${data.password}`
            };
            transport.sendMail(mailOptions, (error, info) => {
                if(error) {
                    console.log(error);
                }
                // console.log(`Message sent:${info.response}`);
                response.send({message:"success"})
        
            });
        }
    })
})







//port
const port=999;
app.listen(process.env.PORT || port,()=>{console.log(`server listening on ${port}...`)});