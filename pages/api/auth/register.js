import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/user'
import httpStatus from 'http-status';
import withSession from '../../../lib/iron-config';

export default withSession(async (req, res) => {



  const { firstName, 
          middleName, 
          lastName,
          phoneNo, 
          email,
          matric_No,
          level, } = await req.body;

  try {
    if (req.method === 'POST') {
      await dbConnect();

      const userCheck = await User.findOne({ email: email.toLowerCase() });
      const userCheck2 = await User.findOne({ matric_No: matric_No.toLowerCase() });

      if (userCheck || userCheck2) {
        return res.status(200).json({ message: 'User already exists', submitted: false });
      }
      // create user
     // const hashPassword = await bcrypt.hash(password, 10);

      const user = await new User({
          firstName, 
          middleName, 
          lastName,
          phoneNo, 
          email,
          matric_No,
          level,
      });

      await user.save();

      req.session.set('user', { id: user._id, email: user.email });

      await req.session.save();
      //return res.status(httpStatus.OK).end();
      return res.status(200).json({ message: 'submitted', submitted: true });
    }
    //return res.status(httpStatus.BAD_REQUEST).end();
    return res.status(500).json({ message: 'failed', submitted: true });

  } catch (error) {
    console.log(error, error.message);
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.message);
  }
});