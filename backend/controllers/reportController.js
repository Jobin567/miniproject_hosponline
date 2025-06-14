import { v2 as cloudinary } from "cloudinary"
import reportModel from "../models/reportModel.js"

// function for add product
const addReport = async (req, res) => {
    try {

        const { name, description, price, category, subCategory, sizes, bestseller } = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )

        const doctorData = {
            name,
            description,
            category,
            price:Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        }

        console.log(doctorData);

        const doctor = new reportModel(doctorData);
        await doctor.save()

        res.json({ success: true, message: "Report Added" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for list product
const listReports = async (req, res) => {
    try {
        
        const reports = await reportModel.find({});
        res.json({success:true,reports})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for removing product
const removeReport = async (req, res) => {
    try {
        
        await reportModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Doctor Removed"})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for single product info
const singleReport = async (req, res) => {
    try {
        
        const { reportId } = req.body
        const report = await reportModel.findById(reportId)
        res.json({success:true,doctor})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { listReports, addReport, removeReport, singleReport }