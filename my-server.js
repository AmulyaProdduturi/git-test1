var http=require('http');
http.createServer(function(req,res){
    res.write("Hello World from Amulya Prodduturi!");
    res.end();
}).listen(3000,function(){
    console.log("server running at port 3000");
});