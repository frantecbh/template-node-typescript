import express from "express";

const app = express()

app.get("/ads", (request, response) =>{
  return response.status(200).json({message: "ola frantec!"})
})


app.listen(3333, () =>{
  console.log("server on")
})