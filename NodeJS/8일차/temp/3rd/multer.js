const multer = require('multer');
const fs = require('fs');

const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done) {
            done(null, 'upload/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits : { fileSize : 5 * 1024 * 1024 },
});

try {
    fs.readdirSync('uploads');
} catch (err) {
    console.error('uploads 폴더가 없어서 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}

