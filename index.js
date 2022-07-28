const app = express();
app.get("*",(req, res) => {
    res.status(200).json({OK:true})
  });
  
  app.listen(port, (res,req) => console.log(`Listening on port ${port}`)); 