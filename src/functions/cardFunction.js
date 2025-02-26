import { findObjectById } from "./functions";

const increaseCountOfProductInCard = (
  cart,
  setCart,
  cartIndex,
  schoolIndex,
  productIndex,
  pack
) => {
  try {
    const tempCart = [...cart];
    const tiny = tempCart[cartIndex]?.school[schoolIndex]?.tiny.slice(1);

    // Check if tiny exists before proceeding
    if (tiny) {
      const tempTiny = [...tiny];
      const product = { ...tempTiny[productIndex] };

      if (product) {
        // Use the increment operator to increase count
        product.count = product.count ? product.count + 1 : 2;
      }

      tempTiny[productIndex] = product;
      console.log(tempTiny);
      tempCart[cartIndex].school[schoolIndex].tiny = [
        tempCart[cartIndex]?.school[schoolIndex]?.tiny[0],
        ...tempTiny,
      ];

      console.log(tempCart);
      //   console.log(tempCart);
      // Update the state with the modified cart
      setCart(tempCart);
    }
  } catch (err) {
    console.log(err);
    alert("Error in increaseCountOfProductInCard");
  }
};

const decreaseCountOfProductInCard = (
  cart,
  setCart,
  cartIndex,
  schoolIndex,
  productIndex,
  pack
) => {
  try {
    const tempCart = [...cart];
    const tiny = tempCart[cartIndex]?.school[schoolIndex]?.tiny.slice(1);

    // Check if tiny exists before proceeding
    if (tiny) {
      const tempTiny = [...tiny];
      const product = { ...tempTiny[productIndex] };

      if (product) {
        // Use the increment operator to increase count
        if (product.count) {
          if (product.count === 1) {
            product.count = tempTiny.splice(productIndex, 1);
          } else {
            product.count = product.count - 1;
            tempTiny[productIndex] = product;
          }
        } else tempTiny.splice(productIndex, 1);
      }

      if (tempTiny.length === 0) {
        tempCart[cartIndex].school.splice(schoolIndex, 1);
      } else {
        console.log(tempTiny);
        tempCart[cartIndex].school[schoolIndex].tiny = [
          tempCart[cartIndex]?.school[schoolIndex]?.tiny[0],
          ...tempTiny,
        ];

        console.log(tempCart);
        //   console.log(tempCart);
        // Update the state with the modified cart
      }
      setCart(tempCart);
    }
  } catch (err) {
    console.log(err);
    alert("Error in increaseCountOfProductInCard");
  }
};

const increaseCountOfCustomEventPackProductInCard = (
  cart,
  setCart,
  cartIndex,
  eventIndex,
  productIndex,
  pack
) => {
  try {
    const tempCart = [...cart];
    const tiny = tempCart[cartIndex]?.event[eventIndex]?.tiny.slice(1);

    // Check if tiny exists before proceeding
    if (tiny) {
      const tempTiny = [...tiny];
      const product = { ...tempTiny[productIndex] };

      if (product) {
        // Use the increment operator to increase count
        product.count = product.count ? product.count + 1 : 2;
      }

      tempTiny[productIndex] = product;
      console.log(tempTiny);
      tempCart[cartIndex].event[eventIndex].tiny = [
        tempCart[cartIndex]?.event[eventIndex]?.tiny[0],
        ...tempTiny,
      ];

      console.log(tempCart);
      //   console.log(tempCart);
      // Update the state with the modified cart
      setCart(tempCart);
    }
  } catch (err) {
    console.log(err);
    alert("Error in increaseCountOfProductInCard");
  }
};

const decreaseCountOfCustomEventPackProductInCard = (
  cart,
  setCart,
  cartIndex,
  eventIndex,
  productIndex,
  pack
) => {
  try {
    const tempCart = [...cart];
    const tiny = tempCart[cartIndex]?.event[eventIndex]?.tiny.slice(1);

    // Check if tiny exists before proceeding
    if (tiny) {
      const tempTiny = [...tiny];
      const product = { ...tempTiny[productIndex] };

      if (product) {
        // Use the increment operator to increase count
        if (product.count) {
          if (product.count === 1) {
            product.count = tempTiny.splice(productIndex, 1);
          } else {
            product.count = product.count - 1;
            tempTiny[productIndex] = product;
          }
        } else tempTiny.splice(productIndex, 1);
      }

      if (tempTiny.length === 0) {
        tempCart[cartIndex].event.splice(eventIndex, 1);
      } else {
        console.log(tempTiny);
        tempCart[cartIndex].event[eventIndex].tiny = [
          tempCart[cartIndex]?.event[eventIndex]?.tiny[0],
          ...tempTiny,
        ];

        console.log(tempCart);
        //   console.log(tempCart);
        // Update the state with the modified cart
      }
      setCart(tempCart);
    }
  } catch (err) {
    console.log(err);
    alert("Error in increaseCountOfProductInCard");
  }
};

const increaseCountOfCustomSchoolPackInCard = (
  cart,
  setCart,
  cartIndex,
  schoolIndex
) => {
  try {
    const tempCart = [...cart];
    let currentCount = tempCart[cartIndex]?.school[schoolIndex]?.count;
    let updatedCount;
    if (currentCount) {
      updatedCount = currentCount + 1;
    } else {
      updatedCount = 2;
    }

    tempCart[cartIndex].school[schoolIndex].count = updatedCount;
    setCart(tempCart);
    console.log(tempCart);
  } catch (err) {
    console.log(err);
    alert("Error ");
  }
};
const decreaseCountOfCustomSchoolPackInCard = (
  cart,
  setCart,
  cartIndex,
  schoolIndex
) => {
  try {
    const tempCart = [...cart];
    let currentCount = tempCart[cartIndex]?.school[schoolIndex]?.count;
    let updatedCount;
    if (currentCount) {
      if (currentCount > 1) {
        updatedCount = currentCount - 1;
      } else {
        tempCart[cartIndex]?.school.splice(schoolIndex, 1);
      }
    } else {
      tempCart[cartIndex]?.school.splice(schoolIndex, 1);
    }

    if (currentCount > 1) {
      tempCart[cartIndex].school[schoolIndex].count = updatedCount;
      setCart(tempCart);
      console.log(tempCart);
    }
    // if count is 1, so we remove the pack
    else {
      setCart(tempCart);
    }
  } catch (err) {
    console.log(err);
    alert("Error ");
  }
};

const increaseCountOfEventPackInCard = (
  cart,
  setCart,
  cartIndex,
  isSchool,
  schoolIndex,
  eventIndex,
  packIndex
) => {
  //   try {
  const tempCart = [...cart];
  let currentCount;
  if (isSchool) {
    currentCount = tempCart[cartIndex]?.school[schoolIndex]?.count;
  } else {
    currentCount =
      tempCart[cartIndex]?.event[eventIndex]?.tiny[packIndex]?.count;
  }
  let updatedCount;
  if (currentCount) {
    updatedCount = currentCount + 1;
  } else {
    updatedCount = 2;
  }

  if (isSchool) {
    tempCart[cartIndex].school[schoolIndex].count = updatedCount;
  } else {
    tempCart[cartIndex].event[eventIndex].tiny[packIndex].count = updatedCount;
  }
  setCart(tempCart);
  console.log(tempCart);
  //   } catch (err) {
  //     console.log(err);
  //     alert("Error ");
  //   }
};
const decreaseCountOfEventPackInCard = (
  cart,
  setCart,
  cartIndex,
  isSchool,
  schoolIndex,
  eventIndex,
  packIndex
) => {
  //   try {
  const tempCart = [...cart];
  let currentCount;
  if (isSchool) {
    currentCount = tempCart[cartIndex]?.school[schoolIndex]?.count;
  } else {
    currentCount =
      tempCart[cartIndex]?.event[eventIndex]?.tiny[packIndex]?.count;
  }
  let updatedCount;
  if (currentCount) {
    if (currentCount > 1) {
      updatedCount = currentCount - 1;
    } else {
      if (isSchool) {
        tempCart[cartIndex]?.school.splice(schoolIndex, 1);
      } else {
        tempCart[cartIndex]?.event[eventIndex]?.tiny.splice(packIndex, 1);
      }
    }
  } else {
    if (isSchool) {
      tempCart[cartIndex]?.school.splice(schoolIndex, 1);
    } else {
      tempCart[cartIndex]?.event[eventIndex]?.tiny.splice(packIndex, 1);
      if (tempCart[cartIndex]?.event[eventIndex]?.tiny?.length === 0) {
        tempCart[cartIndex]?.event.splice(eventIndex, 1);
      }
    }
  }
  if (currentCount > 1) {
    if (isSchool) {
      tempCart[cartIndex].school[schoolIndex].count = updatedCount;
    } else {
      tempCart[cartIndex].event[eventIndex].tiny[packIndex].count =
        updatedCount;
    }
  }
  setCart(tempCart);
  console.log(tempCart);
  //   } catch (err) {
  //     console.log(err);
  //     alert("Error ");
  //   }
};

const increaseCountOfCustomEventPackInCard = (
  cart,
  setCart,
  cartIndex,
  eventIndex
) => {
  try {
    const tempCart = [...cart];
    let currentCount = tempCart[cartIndex]?.event[eventIndex]?.count;
    let updatedCount;
    if (currentCount) {
      updatedCount = currentCount + 1;
    } else {
      updatedCount = 2;
    }

    tempCart[cartIndex].event[eventIndex].count = updatedCount;
    setCart(tempCart);
    console.log(tempCart);
  } catch (err) {
    console.log(err);
    alert("Error ");
  }
};

const decreaseCountOfCustomEventPackInCard = (
  cart,
  setCart,
  cartIndex,
  eventIndex
) => {
  try {
    const tempCart = [...cart];
    let currentCount = tempCart[cartIndex]?.event[eventIndex]?.count;
    let updatedCount;
    if (currentCount) {
      if (currentCount > 1) {
        updatedCount = currentCount - 1;
      } else {
        tempCart[cartIndex]?.event.splice(eventIndex, 1);
      }
    } else {
      tempCart[cartIndex]?.event.splice(eventIndex, 1);
    }

    if (currentCount > 1) {
      tempCart[cartIndex].event[eventIndex].count = updatedCount;
      setCart(tempCart);
      console.log(tempCart);
    }
    // if count is 1, so we remove the pack
    else {
      setCart(tempCart);
    }
  } catch (err) {
    console.log(err);
    alert("Error ");
  }
};

export {
  increaseCountOfProductInCard,
  decreaseCountOfProductInCard,
  increaseCountOfCustomEventPackProductInCard,
  decreaseCountOfCustomEventPackProductInCard,
  increaseCountOfCustomSchoolPackInCard,
  decreaseCountOfCustomSchoolPackInCard,
  increaseCountOfEventPackInCard,
  decreaseCountOfEventPackInCard,
  increaseCountOfCustomEventPackInCard,
  decreaseCountOfCustomEventPackInCard,
};
