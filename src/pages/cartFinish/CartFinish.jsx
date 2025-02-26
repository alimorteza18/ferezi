import { useNavigate } from "react-router-dom";

const CartFinish = () => {
    const navigate = useNavigate();
    return (<div className="w-full h-full flex justify-center items-center p-2">
        {/* <div className="bg-[#FFEFEA] w-full h-auto flex flex-col justify-center items-center p-2 rounded-lg shadow-lg">
            
        </div> */}
        <img onClick={() => navigate("/")} src="./bbb.svg" alt="" />
    </div>);
}

export default CartFinish;