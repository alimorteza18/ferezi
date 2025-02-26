// import { ReactComponent as home } from "assets/icons/home.svg";
// import { ReactComponent as cart } from "assets/icons/bag-check.svg";
// import { ReactComponent as child } from "assets/icons/heart.svg";
// import { ReactComponent as condition } from "assets/icons/document-text.svg";
// import { ReactComponent as help } from "assets/icons/call-chat-rounded.svg";
import home from "assets/icons/footer/home.png";
import cart from "assets/icons/footer/shop.png";
import child from "assets/icons/footer/child.svg";
import condition from "assets/icons/footer/paper.png";
import help from "assets/icons/footer/info.png";
const menuItems = [
  {
    id: 0,
    itemName: "home",
    ItemIcon: home,
    link: "/",
    width: "22px",
    hight: "20px",
  },
  {
    id: 1,
    itemName: "cart",
    ItemIcon: cart,
    link: "/cart",
    width: "23px",
    hight: "20px",
  },
  {
    id: 2,
    itemName: "child",
    ItemIcon: child,
    link: "/child",
    width: "25px",
    hight: "20px",
  },
  // {
  //   id: 3,
  //   itemName: "condition",
  //   ItemIcon: condition,
  //   link: "/condition",
  //   width: "19px",
  //   hight: "20px",
  // },
  // {
  //   id: 4,
  //   itemName: "help",
  //   ItemIcon: help,
  //   link: "/condition",
  //   width: "23px",
  //   hight: "20px",
  // },
];
export default menuItems;
