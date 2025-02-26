import { Store } from "react-notifications-component";

// start function to find an object by id
const findObjectById = (array, id) => {
  return array.find((obj) => obj.id === id);
};
// end of function to find an object by id


//  -&-&-&- search in product by name in array of custom products -&-&-&-  
const searchProductInSearchBar = (products, searchTerm) => {
  return products
    .map((category) => {
      const matchedProducts = category.products.filter((product) => {
        return (
          product.name_en
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) || // Case-insensitive comparison for English
          product.name_fa.includes(searchTerm) || // Farsi is case-sensitive, so no `.toLowerCase()`
          product.name_ar.includes(searchTerm) // Arabic is also case-sensitive
        );
      });

      if (matchedProducts.length > 0) {
        return {
          ...category,
          products: matchedProducts,
        };
      }

      return null;
    })
    .filter((category) => category !== null);
};



// *** REE boys, age 3-10 ***
const calcREEBoyBetweenThreeTillTen = (weight, height) => {
  let REE = 19.59 * weight + 1.303 * height + 414.9;
  console.log(REE);
  return REE;
};

// *** REE boys, age 11-18 ***
const calcREEBoyBetweenElevenTillEighteen = (weight, height) => {
  let REE = 16.25 * weight + 1.372 * height + 515.5;
  return REE;
};

// *** REE girls, age 3-10 ***
const calcREEGirlBetweenThreeTillTen = (weight, height) => {
  let REE = 16.969 * weight + 1.618 * height + 371.2;
  return REE;
};
// *** REE girls, age 11-18 ***
const calcREEGirlBetweenElevenTillEighteen = (weight, height) => {
  let REE = 8.365 * weight + 4.65 * height + 200;
  return REE;
};

const TEECalculator = (REE) => {
  // *** TEE = REE * 1.3 * 1.1 ***
  const TEE = REE * 1.43;
  return TEE;
};

const calcFTEE = (TEE) => {
  // *** 0.5 * TEE - 360
  console.log(TEE);
  let FTEE = 0.5 * TEE;
  FTEE = FTEE - 360;
  console.log(FTEE);
  return FTEE;
};

const calcFinalFTEE = (gender, age, weight, height) => {
  const REE = REECalculator(gender, age, weight, height);
  console.log("ftee", REE);
  const TEE = TEECalculator(REE);
  const FTEE = Math.round(calcFTEE(TEE));
  console.log("ftee", FTEE);
  return FTEE;
};

const REECalculator = (gender, age, weight, height) => {
  console.log("age", age);
  let ageLimit = null;
  if (3 <= age && age <= 10) {
    ageLimit = "BetweenThreeTillTen";
  } else if (11 <= age && age <= 18) {
    ageLimit = "BetweenElevenTillEighteen";
  } else {
    alert("age is not valid");
  }
  switch (ageLimit) {
    case "BetweenThreeTillTen":
      if (gender === "MA") {
        // console.log("boy and 3-10");
        return calcREEBoyBetweenThreeTillTen(weight, height);
      } else if (gender === "FE") {
        // console.log("girl and 3-10");
        return calcREEGirlBetweenThreeTillTen(weight, height);
      } else {
        console.error("3-10 and gender err");
      }
      break;
    case "BetweenElevenTillEighteen":
      if (gender === "MA") {
        // console.log("boy and 11-18");
        return calcREEBoyBetweenElevenTillEighteen(weight, height);
      } else if (gender === "FE") {
        console.log("girl and 11-18");
        return calcREEGirlBetweenElevenTillEighteen(weight, height);
      } else {
        console.error("11-18 and gender err");
      }
      break;
    default:
      console.error("we have error in REECalculator");
      break;
  }
};

// *** end of REE Functions ***
// *** end of REE Functions ***
// *** end of REE Functions ***

// start increase and decrease of pack items (pack of nuts)

const increaseCountOfPackForSchool = (
  id,
  price,
  nutsName,
  nutsImage,
  orderTypeIsSchool,
  temporaryCart,
  setTemporaryCart,
  cal
) => {
  setTemporaryCart([
    {
      orderType: "school",
      tinyType: "pack",
    },
    { id, price, nutsName, nutsImage, orderTypeIsSchool, count: 1, cal },
  ]);
};

const decreaseCountOfPackForSchool = (
  id,
  price,
  nutsName,
  nutsImage,
  orderTypeIsSchool,
  temporaryCart,
  setTemporaryCart
) => {
  // setTemporaryCart([]);
  const existingItemIndex = temporaryCart?.findIndex((item) => item.id === id);
  if (existingItemIndex !== -1) {
    setTemporaryCart((prevCard) => {
      const updatedCard = [...prevCard];
      // If count is 1, remove the item
      updatedCard.splice(existingItemIndex, 1);
      return updatedCard;
    });
  }
};

const decreaseCountOfPackForEvent = (
  id,
  price,
  nutsName,
  nutsImage,
  orderTypeIsSchool,
  temporaryCart,
  setTemporaryCart,
  count
) => {
  console.log("decreaseCountOfPackForEvent");
  // setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  const existingItemIndex = temporaryCart?.findIndex((item) => item.id === id);
  if (existingItemIndex !== -1) {
    setTemporaryCart((prevCard) => {
      const updatedCard = [...prevCard];
      if (count === 1) {
        // If count is 1, remove the item
        updatedCard.splice(existingItemIndex, 1);
      } else {
        // If count is greater than 1, update the count
        updatedCard[existingItemIndex] = {
          ...updatedCard[existingItemIndex],
          count: count - 1,
        };
      }
      console.log(updatedCard);
      return updatedCard;
    });
  }
};

const increaseCountOfPackForEvent = (
  id,
  price,
  count,
  nutsName,
  nutsImage,
  orderTypeIsSchool,
  temporaryCart,
  setTemporaryCart,
  cal
) => {
  const orderType = orderTypeIsSchool ? "school" : "event";
  console.log(orderType);
  const temp = {
    id,
    price,
    orderType: orderType,
    tinyType: "pack",
    nutsName,
    nutsImage,
    count: 1,
    cal,
  };
  if (id && temporaryCart && temporaryCart.length > 0) {
    console.log(temporaryCart);
    const existingItemIndex = temporaryCart.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      console.log(existingItemIndex);
      // If the item exists, update the count
      setTemporaryCart((prevCard) => {
        const updatedCard = [...prevCard];
        updatedCard[existingItemIndex] = {
          ...updatedCard[existingItemIndex],
          count: count + 1,
        };
        console.log(updatedCard);
        return updatedCard;
      });
    } else {
      // If the item not found, add item to card
      setTemporaryCart([...temporaryCart, temp]);
    }
  } else {
    // If the temporaryCard is empty
    setTemporaryCart([temp]);
    console.log(temp);
    // addToTemporaryCard();
  }
};

const increaseCountOfPack = (
  id,
  price,
  count,
  nutsName,
  nutsImage,
  orderTypeIsSchool,
  temporaryCart,
  setTemporaryCart,
  cal
) => {
  if (orderTypeIsSchool)
    increaseCountOfPackForSchool(
      id,
      price,
      nutsName,
      nutsImage,
      orderTypeIsSchool,
      temporaryCart,
      setTemporaryCart,
      cal
    );
  else
    increaseCountOfPackForEvent(
      id,
      price,
      count,
      nutsName,
      nutsImage,
      orderTypeIsSchool,
      temporaryCart,
      setTemporaryCart,
      cal
    );
};

const decreaseCountOfPack = (
  id,
  price,
  nutsName,
  nutsImage,
  orderTypeIsSchool,
  temporaryCart,
  setTemporaryCart,
  count
) => {
  if (orderTypeIsSchool)
    decreaseCountOfPackForSchool(
      id,
      price,
      nutsName,
      nutsImage,
      orderTypeIsSchool,
      temporaryCart,
      setTemporaryCart
    );
  // for event
  else if (!orderTypeIsSchool) {
    decreaseCountOfPackForEvent(
      id,
      price,
      nutsName,
      nutsImage,
      orderTypeIsSchool,
      temporaryCart,
      setTemporaryCart,
      count
    );
  }

  // setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  // const existingItemIndex = temporaryCard.findIndex((item) => item.id === id);
  // if (existingItemIndex !== -1) {
  //   setTemporaryCard((prevCard) => {
  //     const updatedCard = [...prevCard];
  //     if (count === 1) {
  //       // If count is 1, remove the item
  //       updatedCard.splice(existingItemIndex, 1);
  //     } else {
  //       // If count is greater than 1, update the count
  //       updatedCard[existingItemIndex] = {
  //         ...updatedCard[existingItemIndex],
  //         count: count - 1,
  //       };
  //     }
  //     return updatedCard;
  //   });
  // }
};

// end of increase and decrease of pack items ( pack of nuts)

// start increase and decrease of product items (nuts)

const increaseCountOfProduct = (
  count,
  setCount,
  nutsName,
  nutsImage,
  id,
  selectedPackWeight,
  fisrtOption,
  secondOption
) => {
  // setCount(count + 1);
  // const addToTemporaryCard = () => {
  //   const temp = {
  //     nutsName,
  //     nutsImage,
  //     count: 1,
  //     id,
  //     selectedPackWeight,
  //     fisrtOption,
  //     secondOption,
  //   };
  //   setTemporaryCard([...temporaryCard, temp]);
  // };
  // if (id && temporaryCard && temporaryCard.length > 0) {
  //   const existingItemIndex = temporaryCard.findIndex((item) => item.id === id);
  //   if (existingItemIndex !== -1) {
  //     // If the item exists, update the count
  //     setTemporaryCard((prevCard) => {
  //       const updatedCard = [...prevCard];
  //       updatedCard[existingItemIndex] = {
  //         ...updatedCard[existingItemIndex],
  //         count: count + 1,
  //       };
  //       return updatedCard;
  //     });
  //   } else {
  //     // If the item not found, add item to card
  //     addToTemporaryCard();
  //   }
  // }
  // else {
  //   // If the temporaryCard is empty
  //   addToTemporaryCard();
  // }
};

const decreaseCountOfProduct = () => {};
// end of increase and decrease of product items (nuts)

// start check if a pack with equal of fisrtOption, secondOption and selectedPackWeight is exist in temporaryCard
const checkProductWeightAndOptionsEqualWithExitProduct = (
  temporaryCard,
  existingItemIndex,
  fisrtOption,
  secondOption,
  selectedPackWeight
) => {
  // const fisrtOptionStatus =
  //   temporaryCard[existingItemIndex].fisrtOption.id === fisrtOption.id;
  // const secondOptionStatus =
  //   temporaryCard[existingItemIndex].secondOption.id === secondOption.id;
  // const WeightAndPriceStatus =
  //   temporaryCard[existingItemIndex].selectedPackWeight.id ===
  //   selectedPackWeight.id;
  // return fisrtOptionStatus && secondOptionStatus && WeightAndPriceStatus;
};

// end of check if a pack with equal of fisrtOption, secondOption and selectedPackWeight is exist in temporaryCard

//  -&-&-&- remove a product from temporary cart  -&-&-&-
const removeProductFromTempCart = (
  orderedProduct,
  selectedProduct,
  temporaryCart,
  setTemporaryCart
) => {
  const existingItemIndex = temporaryCart.findIndex(
    (product) => product.id === orderedProduct.id
  );
  if (existingItemIndex !== -1) {
    setTemporaryCart((prevCard) => {
      const updatedCard = [...prevCard];
      updatedCard.splice(existingItemIndex, 1);
      return updatedCard;
    });
  }
};

const checkIsExistDateOfDeliveryInCard = (cart, dateOfDelivery) => {
  if (cart.length > 0) {
    const existingDateOfDeliveryIndex = cart.findIndex(
      (item) => item.date === dateOfDelivery
    );
    if (existingDateOfDeliveryIndex !== -1) return true;
    else return false;
  } else return false;
};

const indexOfDateOfDeliveryInCard = (cart, dateOfDelivery) => {
  if (cart.length > 0) {
    const existingDateOfDeliveryIndex = cart.findIndex(
      (item) => item.date === dateOfDelivery
    );
    if (existingDateOfDeliveryIndex !== -1) return existingDateOfDeliveryIndex;
  }
  // else alert("در سبد خرید مشکلی پیش آمده است");
};

const ChildHaveOrderInCard = (schoolOrderType, child) => {
  if (schoolOrderType.length > 0) {
    if (schoolOrderType.findIndex((order) => order.child.id === child.id))
      return true;
    else return false;
  } else return false;
};

const checkChildOrderIsInCart = (cart, dateOfDelivery, orderType) => {
  if (checkIsExistDateOfDeliveryInCard) {
    const indexOfDeliveryDate = indexOfDateOfDeliveryInCard();
    if (cart[indexOfDeliveryDate].school) {
    }
  }
};

const addAProductToTempCartForSchool = (
  orderedProduct,
  selectedProduct,
  temporaryCart,
  setTemporaryCart
) => {
  if (
    temporaryCart[0]?.orderType !== "school" ||
    temporaryCart[0]?.tinyType !== "custom"
  ) {
    setTemporaryCart([
      {
        orderType: "school",
        tinyType: "custom",
      },
      orderedProduct,
    ]);
    notification("add", "product addded", "success");
  } else if (temporaryCart && temporaryCart.length > 0) {
    // check product of this category is in card or no
    const indexOfExistProduct = temporaryCart.findIndex(
      (product) => product.categoryId === orderedProduct.categoryId
    );
    if (indexOfExistProduct !== -1) {
      if (productIsEqual(orderedProduct, temporaryCart[indexOfExistProduct])) {
        notification("exist", "product exist", "success");
      } else {
        notification("replaced", "product replaced", "success");
        const newCart = [...temporaryCart];
        newCart[indexOfExistProduct] = orderedProduct;
        setTemporaryCart(newCart);
      }
    } else {
      setTemporaryCart([...temporaryCart, orderedProduct]);
      notification("add", "product addded", "success");
    }
  } else {
    setTemporaryCart([
      {
        orderType: "school",
        tinyType: "custom",
      },
      orderedProduct,
    ]);
    notification("add", "product addded", "success");
  }
};

const addAProductToTempCartForEvent = (
  orderedProduct,
  selectedProduct,
  temporaryCart,
  setTemporaryCart
) => {
  if (
    temporaryCart[0]?.orderType !== "event" ||
    temporaryCart[0]?.tinyType !== "custom"
  ) {
    setTemporaryCart([
      {
        orderType: "event",
        tinyType: "custom",
      },
      orderedProduct,
    ]);
    notification("add", "product addded", "success");
  } else if (temporaryCart && temporaryCart.length > 0) {
    //   // check product of this category is in card or no
    //   const indexOfExistProduct = temporaryCart.findIndex(
    //     (product) => product.categoryId === orderedProduct.categoryId
    //   );
    //   if (indexOfExistProduct !== -1) {
    //     if (productIsEqual(orderedProduct, temporaryCart[indexOfExistProduct])) {
    //       notification("exist", "product exist", "success");
    //     } else {
    //       notification("replaced", "product replaced", "success");
    //       const newCart = [...temporaryCart];
    //       newCart[indexOfExistProduct] = orderedProduct;
    //       setTemporaryCart(newCart);
    //     }
    //   }
    // else {
    setTemporaryCart([...temporaryCart, orderedProduct]);
    notification("add", "product addded", "success");
    // }
  } else {
    setTemporaryCart([
      {
        orderType: "school",
        tinyType: "custom",
      },
      orderedProduct,
    ]);
    notification("add", "product addded", "success");
  }
};

// check two product name is equal ( two product is equal but first options and second options and packweight not equal)
const productNameIsEqual = (product1, product2) => {
  const product = product1.id === product2.id;
  // const firstOptionIsEqual =
  //   product1.fisrtOption.id === product2.fisrtOption.id;
  // const secondOptionIsEqual =
  //   product1.secondOption.id === product2.secondOption.id;
  // const packWeightIsEqual =
  //   product1.selectedPackWeight.id === product2.selectedPackWeight.id;
  // console.log(firstOptionIsEqual, secondOptionIsEqual, packWeightIsEqual);
  const isEqual = product;
  //  && firstOptionIsEqual && secondOptionIsEqual && packWeightIsEqual;
  return isEqual;
};
// check two product details is equal
const productIsEqual = (product1, product2) => {
  const product = product1.id === product2.id;
  const firstOptionIsEqual =
    product1.fisrtOption.id === product2.fisrtOption.id;
  const secondOptionIsEqual =
    product1.secondOption.id === product2.secondOption.id;
  const packWeightIsEqual =
    product1.selectedPackWeight.id === product2.selectedPackWeight.id;
  // console.log(firstOptionIsEqual, secondOptionIsEqual, packWeightIsEqual);
  const isEqual =
    product && firstOptionIsEqual && secondOptionIsEqual && packWeightIsEqual;
  return isEqual;
};

const productCategoryIsEqual = (product1, product2) => {
  const isEqual = (product1.categoryId = product2.categoryId);
  return isEqual;
};

const haveOrderTypeSchoolInSelectedDate = (cart, deliveryDate, orderType) => {
  // let indexOfDeliveryDateInCart = -1;
  if (cart.length > 0) {
    const indexOfDateOfDeliveryInCard = cart.findIndex(
      (obj) => obj.date === deliveryDate
    );

    if (indexOfDateOfDeliveryInCard !== -1) {
      return cart[indexOfDateOfDeliveryInCard].school
        ? cart[indexOfDateOfDeliveryInCard].school
        : false;
    } else return false;
  }
  return false;

  // console.log(indexOfDeliveryDateInCart);
  // if (indexOfDeliveryDateInCart() === -1) {
  //   return false;
  // } else if (cart[indexOfDateOfDeliveryInCard]?.school) {
  //   return cart[indexOfDateOfDeliveryInCard].school;
  // } else {
  //   return false;
  // }
};

const haveOrderTypeEventInSelectedDate = (cart, deliveryDate, orderType) => {
  if (cart.length > 0) {
    const indexOfDateOfDeliveryInCard = cart.findIndex(
      (obj) => obj.date === deliveryDate
    );
    if (indexOfDateOfDeliveryInCard !== -1) {
      return cart[indexOfDateOfDeliveryInCard].event
        ? cart[indexOfDateOfDeliveryInCard].event
        : false;
    } else return false;
  }
  return false;
};

const allCategorySelected = (temporaryCart) => {
  console.log(temporaryCart);
  const validCategories = ["nuts", "fruits", "vege", "bread", "Dairy", "juice"];
  // remove first object (order details (types of order))
  temporaryCart = temporaryCart.slice(1);
  console.log("array", temporaryCart);
  const getMissingCategories = (arr) => {
    // Extract categories from array objects
    const categoriesInArray = arr.map((obj) => obj.category);
    // Find missing categories
    const missingCategories = validCategories.filter(
      (category) => !categoriesInArray.includes(category)
    );
    if (missingCategories.length > 0) {
      // Assuming notification is a synchronous function
      missingCategories.forEach((missedCategory) => {
        notification(
          missedCategory,
          `select product from ${missedCategory}`,
          "warning"
        );
      });
      return false;
    }
    return true;
  };
  return getMissingCategories(temporaryCart);
};

const checkSchoolTemporaryCartAndMoveToCart = (
  temporaryCart,
  setTemporaryCart,
  selectedChild,
  deliveryDate,
  cart,
  setCart
) => {
  console.log(cart);
  if (temporaryCart.length === 0) {
    notification("error", "no product selected", "warning");
    return;
  } else {
    const orderType = temporaryCart[0].orderType;
    const tinyType = temporaryCart[0].tinyType;
    if (orderType === "school") {
      if (tinyType === "pack") {
        if (temporaryCart.length < 2) {
          notification("error", "no product selected", "warning");
        }
      }
    }
  }
  // -&-&-&- check all category must be selected  -&-&-&-
  // if (temporaryCart[0].tinyType === "custom") {
  //   if (allCategorySelected(temporaryCart) === false) return;
  // }
  if (selectedChild === null)
    // chech child selected
    return notification("child", "select child", "warning");
  if (deliveryDate === null) {
    return notification("date", "select date", "warning");
  }

  // const convertedDate = deliveryDate.replace(/\//g, "");
  const createStandardFormatOfCartForFisrtPushInThisDate = [
    {
      date: deliveryDate,
      school: [
        {
          child: selectedChild,
          tinyType: temporaryCart[0].tinyType,
          tiny: temporaryCart,
        },
      ],
    },
  ];
  console.log(createStandardFormatOfCartForFisrtPushInThisDate);
  if (cart.length === 0) {
    setCart(createStandardFormatOfCartForFisrtPushInThisDate);
  }
  // else if (
  //   haveOrderTypeSchoolInSelectedDate(
  //     cart,
  //     deliveryDate,
  //     temporaryCart[0].orderType
  //   )
  // ) {
  if (cart.length > 0) {
    const indexOfDateOfDeliveryInCard = cart.findIndex(
      (obj) => obj.date === deliveryDate
    );
    if (indexOfDateOfDeliveryInCard !== -1) {
      // Make a shallow copy of the current state
      const newState = [...cart];

      // Find the relevant date entry (assuming there's only one date entry in the currentState)
      const dateEntry = newState[indexOfDateOfDeliveryInCard];
      if (dateEntry.school) {
        // Add the new object to the "school" array
        dateEntry.school.push({
          child: selectedChild,
          tinyType: temporaryCart[0].tinyType,
          tiny: temporaryCart,
        });

        // Update the state with the new data
        setCart(newState);
      } else {
        dateEntry.school = [
          {
            child: selectedChild,
            tinyType: temporaryCart[0].tinyType,
            tiny: temporaryCart,
          },
        ];
        setCart(newState);
      }
    } else {
      console.log("enter the else");
      const newState = [...cart];
      newState.push({
        date: deliveryDate,
        school: [
          {
            child: selectedChild,
            tinyType: temporaryCart[0].tinyType,
            tiny: temporaryCart,
          },
        ],
      });
      console.log(newState);
      setCart(newState);
    }
    // }
    // } else if (
    //   haveOrderTypeEventInSelectedDate(
    //     cart,
    //     deliveryDate,
    //     temporaryCart[0].orderType
    //   )
    // ) {
  } else {
    console.log("enter the else");
    const newState = [...cart];
    newState.push({
      date: deliveryDate,
      school: [
        {
          child: selectedChild,
          tinyType: temporaryCart[0].tinyType,
          tiny: temporaryCart,
        },
      ],
    });
    console.log(newState);
    setCart(newState);
  }
  setTemporaryCart([]);
  return true;
};

const checkEventTemporaryCartAndMoveToCart = (
  temporaryCart,
  setTemporaryCart,
  deliveryDate,
  cart,
  setCart
) => {
  if (temporaryCart.length === 0) {
    notification("error", "no product selected", "warning");
    return;
  } else {
    const orderType = temporaryCart[0].orderType;
    const tinyType = temporaryCart[0].tinyType;
    if (orderType === "event") {
      if (tinyType === "pack") {
        if (temporaryCart.length < 1) {
          notification("error", "no product selected", "warning");
          return;
        }
      }
    }
  }
  // if (temporaryCart[0].tinyType === "custom") {
  //   if (allCategorySelected(temporaryCart) === false) return;
  // }

  if (deliveryDate === null) {
    return notification("date", "select date", "warning");
  }

  // const convertedDate = deliveryDate.replace(/\//g, "");
  const createStandardFormatOfCartForFisrtPushInThisDate = [
    {
      date: deliveryDate,
      event: [
        {
          tinyType: temporaryCart[0].tinyType,
          tiny: temporaryCart,
        },
      ],
    },
  ];
  if (cart.length === 0) {
    console.log("are sefr");
    setCart(createStandardFormatOfCartForFisrtPushInThisDate);
  } else if (
    haveOrderTypeEventInSelectedDate(
      cart,
      deliveryDate,
      temporaryCart[0].orderType
    )
  ) {
    console.log("enter the haveOrderTypeSchoolInSelectedDate");
    if (cart.length > 0) {
      const indexOfDateOfDeliveryInCard = cart.findIndex(
        (obj) => obj.date === deliveryDate
      );

      // Make a shallow copy of the current state
      const newState = [...cart];

      // Find the relevant date entry (assuming there's only one date entry in the currentState)
      const dateEntry = newState[indexOfDateOfDeliveryInCard];
      if (dateEntry.event) {
        // Add the new object to the "event" array
        dateEntry.event.push({
          tinyType: temporaryCart[0].tinyType,
          tiny: temporaryCart,
        });

        // Update the state with the new data
        setCart(newState);
      } else {
        dateEntry.event = {
          tinyType: temporaryCart[0].tinyType,
          tiny: temporaryCart,
        };
        setCart(newState);
      }
    }
  } else {
    console.log("enter the else");
    const newState = [...cart];
    newState.push({
      date: deliveryDate,
      event: [
        {
          tinyType: temporaryCart[0].tinyType,
          tiny: temporaryCart,
        },
      ],
    });
    console.log(newState);
    setCart(newState);
  }
  setTemporaryCart([]);
  return true;
};

const notification = (title, message, type) => {
  Store.addNotification({
    title,
    message,
    type,
    insert: "bottom",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
};

export {
  searchProductInSearchBar,
  addAProductToTempCartForSchool,
  addAProductToTempCartForEvent,
  removeProductFromTempCart,
  calcFinalFTEE,
  checkEventTemporaryCartAndMoveToCart,
  checkProductWeightAndOptionsEqualWithExitProduct,
  checkSchoolTemporaryCartAndMoveToCart,
  decreaseCountOfPack,
  decreaseCountOfProduct,
  haveOrderTypeSchoolInSelectedDate,
  increaseCountOfPack,
  increaseCountOfProduct,
  productNameIsEqual,
  productIsEqual,
  notification,
  findObjectById,
};
