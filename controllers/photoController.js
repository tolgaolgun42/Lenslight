import Photo from "../models/photoModel.js";

const createPhoto = async (req, res) => {
    console.log('req body', req.body);

    try {
        const photo = await Photo.create(req.body);
        res.status(201).json({
            succeeded: true,
            photo,
        });
    } catch (error) {
        console.error('Error creating photo:', error);
        res.status(500).json({
            succeeded: false,
            message: 'Failed to create photo',
            error: error.message,
        });
    }
};

const getAllPhotos=async(req,res)=>{
    try {
        const photos=await Photo.find({});
        res.status(200).render("photos",{
            photos,
            link:'photos',
        });
    } catch (error) {
        console.log('Error finding photo:',error);
        res.status(500).json({
            succeeded:false,
            message:'Failed to find photo',
            error:error.message,
        });
    }
}

const getAPhotos=async(req,res)=>{
    try {
        const photo=await Photo.findById({_id:req.params.id})
        res.status(200).render("photo",{
            photo,
            link:'photos',
        });
    } catch (error) {
        console.log('Error finding photo:',error);
        res.status(500).json({
            succeeded:false,
            message:'Failed to find photo',
            error:error.message,
        });
    }
}

export { createPhoto,getAllPhotos,getAPhotos };
