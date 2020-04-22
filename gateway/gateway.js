const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(bodyParser.json());

//ORDER

app.post("/order", (req, res) => {
  var newOrder = {
    userId: mongoose.Types.ObjectId(req.body.userId),
    ticketId: mongoose.Types.ObjectId(req.body.ticketId),
    initialDate: req.body.initialeDate,
    deliveryDate: req.body.deliveryDate,
  };
  axios
    .post("http://localhost:4444/order", newOrder)
    .then((orders) => {
      res.send(orders.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

app.get("/orders", (req, res) => {
  axios
    .get("http://localhost:4444/orders")
    .then((orders) => {
      res.send(orders.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

app.get("/order/:id", (req, res) => {
  console.log(req.params.id)
  axios
    .get("http://localhost:4444/order/" + req.params.id)
    .then((orders) => {
      res.send(orders.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

app.delete("/order/:id", (req, res) => {
  axios
    .delete("http://localhost:4444/order/" + req.params.id)
    .then((orders) => {
      res.send(orders.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

app.patch("/order/:id", (req, res) => {
  axios
    .patch("http://localhost:4444/order/" + req.params.id)
    .then((orders) => {
      res.send(orders.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

//USER

app.post("/user", (req, res) => {
  var newUser = {
    name: req.body.name,
    wallet: req.body.wallet
  };
  axios
    .post("http://localhost:3333/user", newUser)
    .then((users) => {
      res.send(users.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

app.get("/users", (req, res) => {
  axios
    .get("http://localhost:3333/users")
    .then((users) => {
      res.send(users.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

app.get("/user/:id", (req, res) => {
  console.log(req.params.id)
  axios
    .get("http://localhost:3333/user/" + req.params.id)
    .then((users) => {
      res.send(users.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

app.delete("/user/:id", (req, res) => {
  axios
    .delete("http://localhost:3333/user/" + req.params.id)
    .then((users) => {
      res.send(users.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

app.patch("/user/:id", (req, res) => {
  axios
    .patch("http://localhost:3333/user/" + req.params.id)
    .then((users) => {
      res.send(users.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

//TICKET

app.post("/ticket", (req, res) => {
  var newTicket = {
    name: req.body.name,
    price: req.body.price
  };
  axios
    .post("http://localhost:2222/ticket", newTicket)
    .then((tickets) => {
      res.send(tickets.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

app.get("/tickets", (req, res) => {
  axios
    .get("http://localhost:2222/tickets")
    .then((tickets) => {
      res.send(tickets.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

app.get("/ticket/:id", (req, res) => {
  console.log(req.params.id)
  axios
    .get("http://localhost:2222/ticket/" + req.params.id)
    .then((tickets) => {
      res.send(tickets.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

app.delete("/ticket/:id", (req, res) => {
  axios
    .delete("http://localhost:2222/ticket/" + req.params.id)
    .then((tickets) => {
      res.send(tickets.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

app.patch("/ticket/:id", (req, res) => {
  axios
    .patch("http://localhost:2222/ticket/" + req.params.id)
    .then((tickets) => {
      res.send(tickets.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});


app.listen(1111, () => {
  console.log("server running");
});
