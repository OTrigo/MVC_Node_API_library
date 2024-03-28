const express = require("express");
const router = express.Router();
const bookControllers = require("../controllers/bookController");

router.get("/api/v1/book", bookControllers.listBooks);
router.post("/api/v1/book", bookControllers.saveBook);
router.put("/api/v1/book/:isbn", bookControllers.updateBook);
router.delete("/api/v1/book/:isbn", bookControllers.deleteBook);

module.exports = router;
