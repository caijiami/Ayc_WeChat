const express=require("express");
const pool=require("../pool");
var router=express.Router();

router.get("/",(req,res)=>{
    // var sql="SELECT * FROM applet_index WHERE num=5";
    // pool.query(sql,(err,result)=>{
    //     if(err) throw err;
    //     obj.img5=result;
    //     res.send(obj)
    // })
    res.send("你好帅啊");
});

router.get("/swiper",(req,res)=>{
    let sql="SELECT * FROM yuChen_image WHERE lid=1";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
});

router.get("/amusement",(req,res)=>{
    var obj={
        beiJing:[],
        shangHai:[],
        xiangGang:[],
        hangZhou:[],
        suZhou:[],
        meiGuo:[],
        riBen:[],
        faGu:[],
    };
    let sql="SELECT * FROM yuChen_amusement WHERE lid=1";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        obj.beiJing=result;
        let sql="SELECT * FROM yuChen_amusement WHERE lid=2";
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            obj.shangHai=result;
            let sql="SELECT * FROM yuChen_amusement WHERE lid=3";
            pool.query(sql,(err,result)=>{
                if(err) throw err;
                obj.xiangGang=result;
                let sql="SELECT * FROM yuChen_amusement WHERE lid=4";
                pool.query(sql,(err,result)=>{
                    if(err) throw err;
                    obj.hangZhou=result;
                    let sql="SELECT * FROM yuChen_amusement WHERE lid=5";
                    pool.query(sql,(err,result)=>{
                        if(err) throw err;
                        obj.suZhou=result;
                        let sql="SELECT * FROM yuChen_amusement WHERE lid=6";
                        pool.query(sql,(err,result)=>{
                            if(err) throw err;
                            obj.meiGuo=result;
                            let sql="SELECT * FROM yuChen_amusement WHERE lid=7";
                            pool.query(sql,(err,result)=>{
                                if(err) throw err;
                                obj.riBen=result;
                                let sql="SELECT * FROM yuChen_amusement WHERE lid=8";
                                pool.query(sql,(err,result)=>{
                                    if(err) throw err;
                                    obj.faGu=result;
                                    res.send(obj)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});


module.exports=router;
