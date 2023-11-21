// console.log('Express Tutorial')

// const http=require('http')
// const server=http.createServer((req,res)=>{
//     console.log('User hit the server');
//     res.end('home page')
// })
// server.listen(5000)
// const express=require('express')
// const app=express()
// app.get('/',(req,res)=>{
//     res.send('Home Page')
// })
// app.listen(5000,()=>{
//     console.log('Server is listening on port 5000');
// })
/****************************** */
// const express=require('express')
// const app=express();
// const path=require('path')
// app.use(express.static('./public'))
// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })
// app.all('*',(req,res)=>{
//     res.status(404).send('resource not found')
// })

// app.listen(5000,()=>{
//     console.log('Server is listening on port 5000....');
// }) 
/*********************************************************** */
// const express=require('express')
// const app=express()
// const {products}=require('./data.js')
// app.get('/',(req,res)=>{
//     res.send('<h1>Home<\h1>')
// })
// app.get('/api/products',(req,res)=>{
//     const newProduct=products.map((product)=>{
//         console.log(product);
//     const {id,name,image}=product;
//     return {id,name,image}
//     })
//     res.json(newProduct)
// })
// app.get('/api/products/:productID',(req,res)=>{
//     const {productID}=req.params
//     const singleProduct=products.find((product)=>product.id===Number(productID)
    
    
// )
// if(!singleProduct){
//     return res.status(404).send('Product does Not Exist')
// }
//     res.json(singleProduct)
// })
// app.get('/api/v1/query',(req,res)=>{
//     const {search,limit}=req.query
//     let sortedProducts=[...products]
//     if(search){
//         sortedProducts=sortedProducts.filter((product)=>{
//             return product.name.startsWith(search)
//         })
//     }
//     if(limit){
//         sortedProducts=sortedProducts.slice(0,Number(limit))
//     }
//     if(sortedProducts.length<1){
//        return res.status(200).json({success:true,data:[]})
//     }
//     res.status(200).send(sortedProducts)
// })
// app.listen(5000,()=>{
//     console.log('server listening on port 5000....');
// })
/*********************************************** */
// const express=require('express')
// const app=express()
// //req=>middleware=>res
// const logger=require('./logger')
// const authorize=require('./authorize')
// const morgan=require('morgan')
// app.use(morgan('tiny'))
// // app.use('/api',logger)
// // app.use([logger,authorize])
// app.get('/',(req,res)=>{
//     res.send('Home')
// })
// app.get('/about',(req,res)=>{
//     res.send('About')
// })
// app.get('/api/products',(req,res)=>{
//     res.send('Products')
// })
// app.get('/api/items',[logger,authorize],(req,res)=>{
//     console.log(req.user);
//     res.send('Items')
// })
// app.listen(5000,()=>{
//     console.log('Server is listening on port 5000....');
// })
/********************************************************** */
const express=require('express')
const app=express()
const people=require('./routes/people')
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())
app.use('/api/people',people)
app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name}=req.body
    if(name){
    return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Provide valid credentials')
})


app.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
})