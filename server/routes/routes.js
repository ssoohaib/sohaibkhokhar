const express = require("express");
const recordRoutes = express.Router();
const mongoose = require('mongoose');
const timestamp=require('time-stamp');

mongoose.set("strictQuery", false);
mongoose.connect(process.env.ATLAS_URI);

const Work = mongoose.model('Work', {
        category:String,
        title:String,
        appType:String,
        img:[String],
        p1:String,
        p2:String,
        technologies:[{tech:String,i:String}],
        github:{
            status:Boolean,
            url:String
        },
        site:{
            status:Boolean,
            url:String
        },
    
});


// var lol1=["blog-ss/blog-ss-1.png","blog-ss/blog-ss-2.png","blog-ss/blog-ss-3.png","blog-ss/blog-ss-4.png","blog-ss/blog-ss-5.png"]
// var lol2=[
//     {
//         tech:"EJS",
//         i:"fa-solid fa-play"
//     },
//     {
//         tech:"Express.js",
//         i:"fa-brands fa-square-js"
//     },
//     {
//         tech:"Node.js",
//         i:"fa-brands fa-node-js"
//     },
//     {
//         tech:"MySQL",
//         i:"fa-solid fa-database"
//     },
//     {
//         tech:"Nodemailer",
//         i:"fa-regular fa-envelope"
//     },
//     {
//         tech:"Socket.io",
//         i:"fa-solid fa-play"
//     },
//     {
//         tech:"Puppeteer",
//         i:"fa-solid fa-play"
//     },
//     {
//         tech:"Authentication",
//         i:"fa-solid fa-play"
//     }
// ]
// var lol3={
//     status:false,
//     url:"#"
// }
// var lol4={
//     status:false,
//     url:"#"
// }

// const kitty = new Work({
//     category:'Journal',
//     title: 'AXOLE (Blog)',
//     appType:'Web Application',
//     img:lol1,
//     p1:"Lorem",
//     p2:"Lorem",
//     technologies:lol2,
//     github:lol3,
//     site:lol4
// });

// kitty.save().then(() => console.log('meow'));

// async function foo() {
//     const all=await Work.find();
//     console.log(all);
// }

// foo()






recordRoutes.route('/work').get((req,res)=>{
    Work.find().then((result)=>{
        console.log("Fetch Request: "+timestamp("HH:mm:ss"));
        res.json(result);
    })
})

module.exports = recordRoutes;