import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const isCustomAuth = token.length < 50

        let decodedData;

        if(token && isCustomAuth) {

            //here 'test' is the token it should be same
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id
            


        }else{
            //it's google auth
            decodedData = jwt.decode(token)
            req.userId = decodedData?.sub
        }

        next()
    } catch (error) {
        console.log(error)
    }
}

export default auth