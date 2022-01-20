import { refreshToken } from "../auth/authOperations"

export const errorHandler = ({error, cbOperation}) => (dispatch) => {
    if(error.code === 400){
        console.log("object", error.code);
        dispatch(refreshToken(cbOperation))
    }

    // dispatch(errorAction())
}