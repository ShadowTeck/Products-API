const path = require('path')
const cloudinary = require('cloudinary').v2;
const fs = require('fs')

// const olduploadProductImage =  async(req, res) => {
//     //console.log(req.files);
//     if(!req.files){
//         throw new Error('no file added')
//     }
//     const productImage = req.files.image
    
//     if(!productImage.mimetype.startsWith('image')) {
//         throw new Error('pwease choose an image ONLY!')
//     }

//     const maxSize = 1024 * 1024;
//     if(productImage.size > maxSize) {
//         throw new Error('max size lol')
//     }

//     const imagePath = path.join(
//         __dirname,
//         '../public/uploads/',
//         productImage.name
//     )
//     await productImage.mv(imagePath)
//     // console.log(productImage);
//     res.status(200).json({ image: { src: `/uploads/${productImage.name}`}})
// }

const uploadProductImage = async (req, res) => {
    const response = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        {
            use_filename: true,
            folder: 'money'
        });
        fs.unlinkSync(req.files.image.tempFilePath)
        return res.status(200).json({ image: {src: response.secure_url} })
};

//UPLOADS TO CLOUDINARY

module.exports = {
    uploadProductImage,
}