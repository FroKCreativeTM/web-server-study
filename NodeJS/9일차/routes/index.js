const express = require('express');
const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
    res.send('Hello, Express');
});

// exports : module화
module.exports = router;