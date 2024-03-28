const Book = require("../model/book");

exports.listBooks = (req, res, next) => {
  Book.find().then((result) => res.json({ books: result }));
};

exports.saveBook = (req, res) => {
  const book = new Book(req.body);

  book
    .save()
    .then(console.log(book))
    .catch((err) => console.error(err));
  res.json({
    message: "Salvo!",
  });
};

exports.updateBook = (req, res) => {
  Book.findOneAndUpdate({ isbn: req.params.isbn }, { ...req.body })
    .then((result) =>
      res.json({
        message: result,
      })
    )
    .catch((err) => console.error(err));
};

exports.deleteBook = (req, res) => {
  Book.findOneAndDelete({ isbn: req.params.isbn })
    .then((result) =>
      res.json({
        message: result,
      })
    )
    .catch((err) => console.error(err));
};
