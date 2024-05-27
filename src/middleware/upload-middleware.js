import multer from 'multer';
import path from 'path';

const storageProduct = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/product/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    },
});
const uploadProduct = multer({ storage: storageProduct });


export {
    uploadProduct
}