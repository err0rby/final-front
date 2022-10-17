import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AlphabetCard from "../../components/AlphabetCard/AlphabetCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { fetchCategory } from "../../features/categorySlice";
import { fetchProduct } from "../../features/productSlice";
import styles from "./oneAlphabetPage.module.css";

const OneAlphabetPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCategory());
    dispatch(fetchProduct())
  }, []);

  const category = useSelector((state) =>
    state.category.category.filter((one) => one._id === id)
  );
  const product = useSelector((state) =>state.product.product.filter((one) => one.category === id));


  return (
    <>
    <Header/>
    <div className={styles.container}>
      {category.map((item) => {
        return (
          <div key={item._id} className={styles.categoryField}>
            <div className={styles.imageField}>
              <img src={`http://localhost:3030/images/${item.image}`} alt="123" />
            </div>
            <div className={styles.textField}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}

      <div className={styles.contentField}>
      {product.map((item) => {
        return <AlphabetCard key={item._id} item={item}/>
      })}

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default OneAlphabetPage;
