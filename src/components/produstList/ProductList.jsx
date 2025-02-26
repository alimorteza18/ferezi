import { useEffect, useState } from "react";
// import almonds from "assets/images/temporaryImages/nuts/tinyjpg/almonds.jpg";

import BottomSheetComponent from "components/bottomSheet/BottomSheetComponent";
import ShowNutsDetails from "components/showNutDetails/ShowNutsDetails";
import classes from "./ProductList.module.scss";

import Axios from "middleware/axiosInstance";
import { useTranslation } from "react-i18next";
import Loading from "layouts/Loading/Loading";
import { searchProductInSearchBar } from "functions/functions";

const ProductList = ({
  orderType,
  selectedChildFTEE,
  datetime,
  searchText,
}) => {

  const hostAddress = process.env.REACT_APP_Host_Address;
  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  const [productList, setProductList] = useState(null);
  const [products, setProducts] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sizeOfTopOfPolygonArrow, setSizeOfTopOfPolygonArrow] = useState(22);

  useEffect(() => {
    if (showProductDetails === false) {
      setSelectedProduct(null);
    }
  }, [showProductDetails]);

  useEffect(() => {
    setSizeOfTopOfPolygonArrow(
      selectedCategory * 93 + 14 * selectedCategory + 22
    );
  }, [selectedCategory]);

  useEffect(() => {
    if (orderType === "school" && selectedChildFTEE !== undefined) {
      getProductsAsChildFTTE();
    } else if (orderType === "event") {
      getDefalutProducts();
    } else alert("error in orderType");
  }, []);

  const getDefalutProducts = () => {
    Axios.get(`/product/food-category/?datetime=${datetime}`)
      .then((res) => {
        setProductList(res.data.results);
        setProducts(res.data.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // -&-&-&- remove spaces on the string -&-&-&-
    let searchEnable = false;
    if (searchText) searchEnable = searchText.replace(/\s+/g, "").length > 0;

    if (searchEnable) {
      const filteredProducts = searchProductInSearchBar(
        productList,
        searchText
      );

      setSearchResult(filteredProducts);
      setProducts(filteredProducts);
    } else {
      setProducts(productList);
    }
  }, [searchText]);

  const getProductsAsChildFTTE = () => {
   
    Axios.get(
      `/product/food-category/?datetime=${datetime}`
    )
      .then((res) => {
        setProductList(res.data.results);
        setProducts(res.data.results);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={classes.container}>
      {products ? (
        <>
          <div className={classes.categoriesContainer}>
            {products?.map((product, index) => {
              return (
                <div
                  className={`${classes.category} ${
                    index === selectedCategory
                      ? `${classes.activeCategory}`
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(index);
                  }}
                >
                  <div className={classes.categoryImageContainer}>
                    <img
                      src={product.image}
                      alt="#"
                      className={classes.categoryImage}
                    />
                  </div>
                  <span className={classes.categoryName}>
                    {product[`name_${lang}`]}
                  </span>
                </div>
              );
            })}
          </div>
          {/* <div className={classes.block}></div> */}

          <div className={classes.productsContainer}>
            <div
              className={`${classes.PolygonArrow}`}
              style={{ top: `${sizeOfTopOfPolygonArrow}px` }}
            ></div>

            {products &&
              products[selectedCategory]?.products?.map((product) => {
                return (
                  <div
                    className={classes.product}
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowProductDetails(true);
                    }}
                  >
                    <div className={classes.productImageContainer}>
                      <img
                        src={`${hostAddress}${product.image}`}
                        alt="#"
                        className={classes.productImage}
                      />
                    </div>
                    <span className={classes.productName}>
                      {product[`name_${lang}`]}
                    </span>
                  </div>
                );
              })}
          </div>
          <BottomSheetComponent
            showBottomSheet={showProductDetails}
            setShowBottomSheet={setShowProductDetails}
          >
            {selectedProduct && (
              <ShowNutsDetails
                selectedProduct={selectedProduct}
                orderType={orderType}
              />
            )}
          </BottomSheetComponent>
        </>
      ) : (
        <div className="flex justify-center w-full">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default ProductList;
