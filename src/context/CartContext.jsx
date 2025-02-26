import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for your context
// type CartContextType = {
//   cart: string[], // Replace string[] with your actual data type
//   setCart: React.Dispatch<React.SetStateAction<string[]>>,
// };

// Create the context with an initial value
const CartContext = createContext(undefined);

// Create a custom hook to use the context
const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};

// Create a provider component
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([
    // {
    //   "date": "03/02/2024",
    //   "school": [
    //     {
    //       "child": {
    //         "name": "tesst",
    //         "FTEE": 554,
    //         "id": 4383,
    //         "needFTEE": 554
    //       },
    //       "tinyType": "custom",
    //       "tiny": [
    //         {
    //           "orderType": "school",
    //           "tinyType": "custom"
    //         },
    //         {
    //           "fisrtOption": {
    //             "id": 1,
    //             "value": "salty",
    //             "name": "type1"
    //           },
    //           "secondOption": {
    //             "id": 1,
    //             "value": "with skin",
    //             "name": "type2"
    //           },
    //           "selectedPackWeight": {
    //             "id": 301,
    //             "name": "100g",
    //             "price": 10,
    //             "cal": 70
    //           },
    //           "id": 200,
    //           "name": "almonds",
    //           "image": "/static/media/almonds.337cf7eb9134edaf0c7a.jpg",
    //           "category": "nuts",
    //           "categoryId": 0
    //         },
    //         {
    //           "fisrtOption": {
    //             "id": 1,
    //             "value": "salty",
    //             "name": "type1"
    //           },
    //           "secondOption": {
    //             "id": 1,
    //             "value": "with skin",
    //             "name": "type2"
    //           },
    //           "selectedPackWeight": {
    //             "id": 311,
    //             "name": "100g",
    //             "price": 10,
    //             "cal": 70
    //           },
    //           "id": 203,
    //           "name": "banana",
    //           "image": "/static/media/banana.95d0f9192ad5bfd995d4.jpg",
    //           "category": "fruits",
    //           "categoryId": 1
    //         },
    //         {
    //           "fisrtOption": {
    //             "id": 1,
    //             "value": "salty",
    //             "name": "type1"
    //           },
    //           "secondOption": {
    //             "id": 1,
    //             "value": "with skin",
    //             "name": "type2"
    //           },
    //           "selectedPackWeight": {
    //             "id": 311,
    //             "name": "100g",
    //             "price": 10,
    //             "cal": 70
    //           },
    //           "id": 205,
    //           "name": "cucumber",
    //           "image": "/static/media/cucumber and tomato.57019cea4b6966ec00ba.jpg",
    //           "category": "vege",
    //           "categoryId": 2
    //         },
    //         {
    //           "fisrtOption": {
    //             "id": 1,
    //             "value": "salty",
    //             "name": "type1"
    //           },
    //           "secondOption": {
    //             "id": 1,
    //             "value": "with skin",
    //             "name": "type2"
    //           },
    //           "selectedPackWeight": {
    //             "id": 311,
    //             "name": "100g",
    //             "price": 10,
    //             "cal": 70
    //           },
    //           "id": 207,
    //           "name": "sheermal",
    //           "image": "/static/media/sheermal.f558b045b19870fd75ae.jpg",
    //           "category": "bread",
    //           "categoryId": 3
    //         },
    //         {
    //           "fisrtOption": {
    //             "id": 1,
    //             "value": "salty",
    //             "name": "type1"
    //           },
    //           "secondOption": {
    //             "id": 1,
    //             "value": "with skin",
    //             "name": "type2"
    //           },
    //           "selectedPackWeight": {
    //             "id": 311,
    //             "name": "100g",
    //             "price": 10,
    //             "cal": 70
    //           },
    //           "id": 209,
    //           "name": "milk",
    //           "category": "Dairy",
    //           "categoryId": 4
    //         },
    //         {
    //           "fisrtOption": {
    //             "id": 1,
    //             "value": "salty",
    //             "name": "type1"
    //           },
    //           "secondOption": {
    //             "id": 1,
    //             "value": "with skin",
    //             "name": "type2"
    //           },
    //           "selectedPackWeight": {
    //             "id": 311,
    //             "name": "100g",
    //             "price": 10,
    //             "cal": 70
    //           },
    //           "id": 211,
    //           "name": "apple juice",
    //           "image": "/static/media/apple juice.e3bc6f81d3fabf16ddc8.jpg",
    //           "category": "juice",
    //           "categoryId": 5
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   "date": "03/12/2024",
    //   "event": [
    //     {
    //       "tinyType": "pack",
    //       "tiny": [
    //         {
    //           "id": 100,
    //           "price": 1,
    //           "orderType": "event",
    //           "tinyType": "pack",
    //           "nutsName": "pack 1",
    //           "nutsImage": "/static/media/almonds.567f3a00a95b55b99d43.jpg",
    //           "count": 3,
    //           "cal": 280
    //         },
    //         {
    //           "id": 101,
    //           "price": 2,
    //           "orderType": "event",
    //           "tinyType": "pack",
    //           "nutsName": "pack 2",
    //           "nutsImage": "/static/media/cashew.c2f708e62ff6f1cfca6b.jpg",
    //           "count": 2,
    //           "cal": 360
    //         },
    //         {
    //           "id": 102,
    //           "price": 3,
    //           "orderType": "event",
    //           "tinyType": "pack",
    //           "nutsName": "pack 3",
    //           "nutsImage": "/static/media/hazelnut.e5c3faaec1f06d39d210.jpg",
    //           "count": 1,
    //           "cal": 430
    //         },
    //         {
    //           "id": 103,
    //           "price": 4,
    //           "orderType": "event",
    //           "tinyType": "pack",
    //           "nutsName": "pack 4",
    //           "nutsImage": "/static/media/macadamia.2503b2e77e3f15fe4e24.jpg",
    //           "count": 12,
    //           "cal": 570
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   "date": "03/13/2024",
    //   "event": [
    //     {
    //       "tinyType": "pack",
    //       "tiny": [
    //         {
    //           "id": 100,
    //           "price": 1,
    //           "orderType": "event",
    //           "tinyType": "pack",
    //           "nutsName": "pack 1",
    //           "nutsImage": "/static/media/almonds.567f3a00a95b55b99d43.jpg",
    //           "count": 4,
    //           "cal": 280
    //         },
    //         {
    //           "id": 101,
    //           "price": 2,
    //           "orderType": "event",
    //           "tinyType": "pack",
    //           "nutsName": "pack 2",
    //           "nutsImage": "/static/media/cashew.c2f708e62ff6f1cfca6b.jpg",
    //           "count": 2,
    //           "cal": 360
    //         },
    //         {
    //           "id": 102,
    //           "price": 3,
    //           "orderType": "event",
    //           "tinyType": "pack",
    //           "nutsName": "pack 3",
    //           "nutsImage": "/static/media/hazelnut.e5c3faaec1f06d39d210.jpg",
    //           "count": 1,
    //           "cal": 430
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   "date": "03/24/2024",
    //   "event": [
    //     {
    //       "tinyType": "custom",
    //       "tiny": [
    //         {
    //           "orderType": "event",
    //           "tinyType": "custom"
    //         },
    //         {
    //           "fisrtOption": {
    //             "id": 1,
    //             "value": "salty",
    //             "name": "type1"
    //           },
    //           "secondOption": {
    //             "id": 1,
    //             "value": "with skin",
    //             "name": "type2"
    //           },
    //           "selectedPackWeight": {
    //             "id": 301,
    //             "name": "100g",
    //             "price": 10,
    //             "cal": 70
    //           },
    //           "id": 200,
    //           "name": "almonds",
    //           "image": "/static/media/almonds.337cf7eb9134edaf0c7a.jpg",
    //           "category": "nuts",
    //           "categoryId": 0
    //         },
    //         {
    //           "fisrtOption": {
    //             "id": 1,
    //             "value": "salty",
    //             "name": "type1"
    //           },
    //           "secondOption": {
    //             "id": 1,
    //             "value": "with skin",
    //             "name": "type2"
    //           },
    //           "selectedPackWeight": {
    //             "id": 311,
    //             "name": "100g",
    //             "price": 10,
    //             "cal": 70
    //           },
    //           "id": 201,
    //           "name": "walnut",
    //           "image": "/static/media/walnut.422f6191e96783f20c76.jpg",
    //           "category": "nuts",
    //           "categoryId": 0
    //         },
    //         {
    //           "fisrtOption": {
    //             "id": 1,
    //             "value": "salty",
    //             "name": "type1"
    //           },
    //           "secondOption": {
    //             "id": 1,
    //             "value": "with skin",
    //             "name": "type2"
    //           },
    //           "selectedPackWeight": {
    //             "id": 301,
    //             "name": "100g",
    //             "price": 10,
    //             "cal": 70
    //           },
    //           "id": 202,
    //           "name": "apple",
    //           "image": "/static/media/apple.8e4f0d07714ba3e63e4d.jpg",
    //           "category": "fruits",
    //           "categoryId": 1
    //         },
    //         {
    //           "fisrtOption": {
    //             "id": 1,
    //             "value": "salty",
    //             "name": "type1"
    //           },
    //           "secondOption": {
    //             "id": 1,
    //             "value": "with skin",
    //             "name": "type2"
    //           },
    //           "selectedPackWeight": {
    //             "id": 311,
    //             "name": "100g",
    //             "price": 10,
    //             "cal": 70
    //           },
    //           "id": 203,
    //           "name": "banana",
    //           "image": "/static/media/banana.95d0f9192ad5bfd995d4.jpg",
    //           "category": "fruits",
    //           "categoryId": 1
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   "date": "03/20/2024",
    //   "school": [
    //     {
    //       "child": {
    //         "name": "tesst",
    //         "FTEE": 554,
    //         "id": 4383,
    //         "needFTEE": 554
    //       },
    //       "tinyType": "custom",
    //       "tiny": [
    //         {
    //           "orderType": "school",
    //           "tinyType": "custom"
    //         },
    //         {
    //           "fisrtOption": {
    //             "id": 1,
    //             "value": "salty",
    //             "name": "type1"
    //           },
    //           "secondOption": {
    //             "id": 1,
    //             "value": "with skin",
    //             "name": "type2"
    //           },
    //           "selectedPackWeight": {
    //             "id": 301,
    //             "name": "100g",
    //             "price": 10,
    //             "cal": 70
    //           },
    //           "id": 200,
    //           "name": "almonds",
    //           "image": "/static/media/almonds.337cf7eb9134edaf0c7a.jpg",
    //           "category": "nuts",
    //           "categoryId": 0
    //         }
    //       ]
    //     }
    //   ]
    // },
  ]); // initial data

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, useCartContext };
