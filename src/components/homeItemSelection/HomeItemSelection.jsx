import { Link } from "react-router-dom";
import classes from "./HomeItemSelection.module.scss";
import { useNavigate } from "react-router-dom";

const HomeItemSelection = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    setTimeout(() => {
      navigate(props.to);
    }, 500);
  };
  return (
    <div
      className={`all-center bg-white text-white h-[150px] w-[240px] mt-6 ${classes.container}`}
      onClick={() => {
        onClickHandler();
      }}
    >
      <div className="flex justify-center items-center space-x-4">
        <img src={props.img} className={classes.img} alt="" />
        <img src="./line.svg" alt="" />
        <div>
          <h2 >{props.name}</h2>
          <h2 >Pack</h2>
        </div>
      </div>
    </div>
  );
};
export default HomeItemSelection;
