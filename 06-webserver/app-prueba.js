import * as http from 'http';


http.createServer((req, res)=>{
    res.write('Hola mundox')
    res.end();
})
.listen(8080)

console.log("esccuchando en el puerto ochocero ochocero")