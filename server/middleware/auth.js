import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    //check if user's token is valid
    //if length < 500 then the token is our own, not GoogleAuth's token
    const token = req.headers.authorization.split("")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      //give us user data (username, id, etc) from each token
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decodedData?.id;
    } else {
      //Google Auth
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    //move on to next action, after checking the user is logged in
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
