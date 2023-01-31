//import withSession from '../../../lib/session';
import User from '../../../models/user';
//import bcrypt from 'bcryptjs';
import httpStatus from 'http-status';
import dbConnect from '../../../lib/dbConnect';
import {withSessionRoute} from '../../../lib/withSession'

export default withSessionRoute(createSessionRouter)

async function createSessionRouter(req, res) {
  const { email, matric_No } = await req.body;
  try {
    await dbConnect();
    // get user from db
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      // password not valid
      return res.status(httpStatus.UNAUTHORIZED).json({ message: 'User does not exist'});
    }
    // compare hashed password
    const valid = await user.matric_No === matric_No
    //const valid = await bcrypt.compare(password, user.password);
    // if the password is a match
    if (valid === true) {
     // req.session.set('user', { id: user._id, email: user.email });
      req.session.user = { id: user._id, email: user.email }
      await req.session.save();
      return res.json(user);
    } else {
      // password not valid
      return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Invalid Password'});
    }
  } catch (error) {
    console.log(error);
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
};




// export default withSession(async (req, res) => {
//   const { email, matric_No } = await req.body;
//   try {
//     await dbConnect();
//     // get user from db
//     const user = await User.findOne({ email: email.toLowerCase() });
//     if (!user) {
//       // password not valid
//       return res.status(httpStatus.UNAUTHORIZED).json({ message: 'User does not exist'});
//     }
//     // compare hashed password
//     const valid = await user.matric_No === matric_No
//     //const valid = await bcrypt.compare(password, user.password);
//     // if the password is a match
//     if (valid === true) {
//       req.session.set('user', { id: user._id, email: user.email });
//       req.session.user = { id: user._id, email: user.email }
//       await req.session.save();
//       return res.json(user);
//     } else {
//       // password not valid
//       return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Invalid Password'});
//     }
//   } catch (error) {
//     console.log(error);
//     const { response: fetchResponse } = error;
//     res.status(fetchResponse?.status || 500).json(error.data);
//   }
// });