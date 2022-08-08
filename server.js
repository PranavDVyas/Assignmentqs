// This code is executed on the backend server.
//It takes in the GET,POST,PUT and DELETE requests from the front end performs the functionalities


const express = require('express');
app.use(express.json());
const data=[
    {
        type:"event",
        uid:18,
        name:"Event1",
        tagline:"",
        schedule: new Date(),
        description: "",
        files: "",
        moderator: "",
        category:"",
        sub_category:"",
        rigor_rank: 0,
        attendees:[]
    }
]
let id=19;
const app = express();
app.get('/api/v3/app/events/',(req,res)=>{
    let obj=req.query;
    if(obj.type&&obj.limit&&obj.page){
        /* getting the particular event based on recency
        paginate results by page number and limits of events per page*/
        res.send("Details: "+obj.type+"   "+obj.limit+"   "+obj.page)
    }
    else if(obj.id){
        //gets the event using it's unique id
        res.send("The event id is: "+obj.id)
    }
    else{
        res.send("Kindly enter correct details");
    }
    res.send(obj);
})

app.post('/api/v3/app/events',(req,res)=>{
    let {name,files,tagline,schedule,description,moderator,category,sub_category,rigor_rank}=req.body
    //creating a new event: 
    let newevent={
        type:"event",
        uid:id,
        name:name,
        tagline:"",
        schedule: schedule,
        description: description,
        files: files,
        moderator: moderator,
        category:category,
        sub_category:sub_category,
        rigor_rank: rigor_rank,
        attendees:[]
    }
    res.send("The id of the newly created event is: "+id);
    id++;
})

app.put('/api/v3/app/events/',(req,res)=>{
    let obj=req.query.id;
    res.send("Put request obtained....");
    //We can then update the event using this ID if we have a database
})

app.delete('/api/v3/app/events/',(req,res)=>{
    let id=req.query.id;
    /*From the existing events we can delete the event with this particular id
    by simple search method*/
})
app.listen(3000);
