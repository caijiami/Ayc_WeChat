const express=require("express");
const pool=require("../pool");
var router=express.Router();

router.get("/travel",(req,res)=>{
    let sql="SELECT * FROM yuChen_image WHERE lid=2";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
});

router.get("/pet/gou",(req,res)=>{
    let sql="SELECT * FROM yuChen_image WHERE lid=3";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
});

router.get("/pet/mao",(req,res)=>{
    let sql="SELECT * FROM yuChen_image WHERE lid=4";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
});

router.get("/more",(req,res)=>{
    let sql="SELECT * FROM yuChen_image WHERE lid=5";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
});

router.get("/car",(req,res)=>{
    let sql="SELECT * FROM yuChen_image WHERE lid=6";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
});



module.exports=router;
