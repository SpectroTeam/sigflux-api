import "dotenv/config";
import FormData from "form-data";
import multer, {FileFilterCallback} from "multer";
import {Request, Response, NextFunction} from "express";
import axios from "axios";

const ALLOWED_MIME_TYPES = ["image/png", "image/jpeg", "image/jpg"];
const SIZE_MAX_FILE = 5 * 1024 * 1024;

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {fieldSize: SIZE_MAX_FILE},
    fileFilter: (req: Request, file: Express.Multer.File, cb: FileFilterCallback ) => {
        if(ALLOWED_MIME_TYPES.includes(file.mimetype)){
            cb(null, true);
        }
        else{
            cb(new Error("Invalid file format"));
        }
    }
})

async function apiUrl (file: Buffer): Promise<string> {
    const form = new FormData();
    form.append("image", file.toString("base64"));
    try {
        const response = await axios.post(
            `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API}`,form,
            {
                headers:{
                    ...form.getHeaders()
                }
            }
        )
       return response.data.data.url;
    } catch (error) {
        throw new Error("Error loading image on imgBB");
    }

}

export const uploadFileMiddleware = [
    upload.single("file"),
    async(req: Request, res: Response, next: NextFunction)=>{
    try {
        const file = req.file;
        if(!file){
            return next();
        }
        const urlImg = await apiUrl(file.buffer);

        req.body.file = {
            path: urlImg,
            size: file.size
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}
]