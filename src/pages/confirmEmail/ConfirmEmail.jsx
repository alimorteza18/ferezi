import AppleAnimationIcon from "components/uiAndIcons/appleAnimationIcon/AppleAnimationIcon";
import LandingAndSignupWrapper from "layouts/landingAndSignupWrapper/LandingAndSignupWrapper";


const ConfirmEmail = () => {



    return (<LandingAndSignupWrapper>

        <div className="h-full w-full flex items-center justify-center">
            <div className="w-[290px] md:w-[340px] h-[470px] flex flex-col items-center justify-center space-y-6">
                <AppleAnimationIcon />
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold text-center text-lg">Sign up</h1>
                    <p className="text-sm text-center mt-2 w-3/4">We have sent you a link to  the email address you entered, click on the link to confirm it is you.</p>
                    {/* <p className="text-sm text-center text-[#A6A8AB] mt-4">Haven’t got the email? <span className="text-[#FFB300] font-bold cursor-pointer">Resend it</span></p> */}
                </div>
            </div>
        </div>

    </LandingAndSignupWrapper>);
}

export default ConfirmEmail;