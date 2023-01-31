import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/user'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({})
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const exuser = await User.findOne({email : req.body.email})

        if(exuser){
           res.status(201).json({ success: false,  exuser, massage: 'user exits' })
          }else{
            const user = await User.create(req.body)
            res.status(201).json({ success: true, data: user, massage: 'user has been added' })
          }
      
        
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}