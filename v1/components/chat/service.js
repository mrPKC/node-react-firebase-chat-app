var { app } = require("index.js");
var { chatModel } = require("models/chat")

app.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    const id = req.body.email;
    const userJson = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };
    const response = await chatModel.saveChat(userJson);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
