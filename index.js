const express=require("express");
const app=express();
const path=require("path");
const fs=require("fs");

var fileStatus={};
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine',('ejs'));

app.use(express.static(path.join(__dirname,'public')))


app.get("/",(req,res)=>{
    // res.send("Chl rha h...");
    // res.render("index");
    fs.readdir(`./files`,(err,files)=>{
        // console.log(files);
        res.render("index",{files})
    })
})

app.post("/create",(req,res)=>{
    // console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join('_')}.txt`,req.body.detail,(err)=>{
        res.redirect("/");// create hote hee / route p phirse file read hogi and phir file milegi
    });
})


app.get('/edit/:filename',(req,res)=>{
    var fName=req.params.filename;
    res.render("edit",{fName});
})

app.post('/edit',(req,res)=>{
    // var oName=req.body.oldtitle.split(' ').join('_').txt;
    // var nName=req.body.oldtitle.split(' ').join('_').txt;
    
    fs.rename(`./files/${req.body.oldtitle.split(' ').join('_')}.txt`,`./files/${req.body.newtitle.split(' ').join('_')}.txt`,(err)=>{
        if(err)
        {
            res.send("Something Went Wrong.");
        }
        res.redirect("/");
        
    })
})


app.get('/delete/:filename',(req,res)=>{
    var fName=req.params.filename;
    res.render("delete",{fName});
})


app.post('/delete',(req,res)=>{
    fs.unlink(`./files/${req.body.title.split(' ').join('_')}.txt`,(err)=>{
        if(err)
        {
            console.log("Something went wrong...");
            console.log(`${req.body.title.split(' ').join('_')}.txt`);
        }
        res.redirect('/');
    })
})




app.get('/file/:filename', (req, res) => {
    const fName = req.params.filename;// this is not working
    fs.readFile(`./files/${req.params.filename}`, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(404).send("File not found");
            return;
        }
        console.log(data);
        res.render("content", { data, fName });
    });
});



app.listen(3000,(req,res)=>{
    console.log("working....")
});