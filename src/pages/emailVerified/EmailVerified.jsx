import AppleAnimationIcon from "components/uiAndIcons/appleAnimationIcon/AppleAnimationIcon";
import LandingAndSignupWrapper from "layouts/landingAndSignupWrapper/LandingAndSignupWrapper";
import { Link } from "react-router-dom";

const EmailVerified = () => {
    return (<LandingAndSignupWrapper>

        <div className="h-full w-full flex items-center justify-center">
            <div className="w-[290px] md:w-[340px] h-[470px] flex flex-col items-center justify-center space-y-6">
                <AppleAnimationIcon />

                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold text-center text-lg">Hooray!</h1>
                    <p className="text-sm text-center mt-2 w-3/4">Your email has been successfully verified.</p>
                    <Link to="/login" className="text-[#FFB300] font-bold cursor-pointer text-center text-sm mt-4">Go to the login page:)</Link>
                </div>
            </div>
        </div>

    </LandingAndSignupWrapper>);
}

export default EmailVerified;