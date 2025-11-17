function status(request, response) {
  response.status(200).json({ chave: "São lalal" });
  // response.status(200).send("São testes");
}

export default status;
