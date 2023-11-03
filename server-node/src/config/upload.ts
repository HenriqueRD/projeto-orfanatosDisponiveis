import multer from 'multer'
import path from 'path'

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 
    'uploads'),
    filename: (req, file, callBack) => {
      const name = `${Date.now()}-${file.originalname.replace(" ", "")}`
      callBack(null, name)
    }
  })
}