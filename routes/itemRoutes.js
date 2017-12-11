const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Item = mongoose.model("items");

module.exports = app => {

  app.get("/api/items", requireLogin, async (req, res) => {
    const items = await Item.find({ _user: req.user.id });
    res.send(items);
  });

  app.get("/api/items/:item_id", async (req, res) => {
    Item.findById(req.params.item_id, function(err, item) {
      if (err) res.send(err);
      res.json(item);
    });
  });

  app.put("/api/items/:item_id", requireLogin, async (req, res) => {
    Item.findById(req.params.item_id, (err, item) => {
      if (err) {
        res.status(500).send(err);
      } else {
        item.title = req.body.title || item.title;
        item.another = req.body.another || item.another;
        item.body = req.body.body || item.body;


        item.dateUpdated = Date.now();
        item._user = req.user.id;

        item.save((err, item) => {
          if (err) {
            res.status(500).send(err);
          }
          res.status(200).send(item);
        });

      }
    });

  });

  app.delete("/api/items/:item_id", async (req, res) => {
    Item.remove(
      {
        _id: req.params.item_id
      },
      function(err, item) {
        if (err) res.send(err);

        res.json({ message: "Deleted!" });
      }
    );
  });

  app.post("/api/items", requireLogin, async (req, res) => {
    const { title, another, body } = req.body;

    const item = new Item({
      title,
      another,
      body,
      _user: req.user.id,
      dateAdded: Date.now()
    });

    try {
      await item.save();
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
