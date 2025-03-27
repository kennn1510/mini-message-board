const { Router } = require("express");
const router = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.get("/message/:messageIndex", (req, res) => {
  const messageIndex = req.params.messageIndex;
  if (messageIndex >= 0 && messageIndex < messages.length) {
    res.render("messageDetails", { message: messages[messageIndex] });
  } else {
    res.status(404).send("Message not found");
  }
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
