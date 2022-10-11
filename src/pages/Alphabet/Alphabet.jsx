import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { fetchCategory } from "../../features/categorySlice";
import styles from "./alphabet.module.css";
import { useNavigate } from "react-router-dom";

const Alphabet = React.memo(() => {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div className={styles.alphabet_page}>
      <Header />
      <div className={styles.alphabet_title}>
        <h4>Special Departments</h4>
      </div>
      <div className={styles.alphabet_lists}>
        <div className={styles.alphabet_1column}>
          <div className={styles.alphabet_1column_09}>
            <h5>0-9</h5>
            <p>20th Century Sculpture</p>
          </div>
          <div className={styles.alphabet_1column_AC}>
            <h5>A-C</h5>
            {categories.map((category) => {
              if (category.title.startsWith("A", 0)) {
                return (
                  <p
                    key={category._id}
                    onClick={() => {
                      navigate(`/alphabet/${category._id}`);
                    }}
                  >
                    {category.title}
                  </p>
                );
              }
              return null;
            })}
            <p>African & Oceanic Art</p>
            <p>Antique Clocks & Timepieces</p>
            <p>Arms & Armour</p>
            <p>Asian Art</p>
            <p>British & European Paintings</p>
            <p>Coins, Medals & Banknotes</p>
            <p>Contemporary & Post War Art</p>
          </div>
          <div className={styles.alphabet_1column_DF}>
            <h5>D-F</h5>
            <p>Design Since 1860</p>
            <p>European Ceramics & Glass</p>
            <p>Furniture</p>
          </div>
        </div>
        <div className={styles.alphabet_2column}>
          <div className={styles.alphabet_2column_GJ}>
            <h5>G-J</h5>
            {categories.map((category) => {
              if (category.title.startsWith("I", 0)) {
                return (
                  <p
                    key={category._id}
                    onClick={() => {
                      navigate(`/alphabet/${category._id}`);
                    }}
                  >
                    {category.title}
                  </p>
                );
              }
              return null;
            })}
            <p>Jacobite & Stuart Works of Art</p>
            <p>Jewellery</p>
          </div>
          <div className={styles.alphabet_2column_KN}>
            <h5>K-N</h5>
            <p>Lalique</p>
            {categories.map((category) => {
              if (category.title.startsWith("M", 0)) {
                return (
                  <p
                    key={category._id}
                    onClick={() => {
                      navigate(`/alphabet/${category._id}`);
                    }}
                  >
                    {category.title}
                  </p>
                );
              }
              return null;
            })}
            <p>Modern British Art</p>
            <p>Modern Design</p>
          </div>
          <div className={styles.alphabet_2column_OR}>
            <h5>O-R</h5>
            {categories.map((category) => {
              if (category.title.startsWith("R", 0)) {
                return (
                  <p
                    key={category._id}
                    onClick={() => {
                      navigate(`/alphabet/${category._id}`);
                    }}
                  >
                    {category.title}
                  </p>
                );
              }
              return null;
            })}
            <p>Old Masters</p>
            <p>Photography</p>
            <p>Portraiture</p>
            <p>Prints & Multiples</p>
            <p>Rugs & Carpets</p>
          </div>
        </div>
        <div className={styles.alphabet_3column}>
          <div className={styles.alphabet_3column_ST}>
            <h5>S-T</h5>
            <p>Scientific Instruments</p>
            <p>Scottish Applied Arts</p>
            <p>Scottish Paintings & Sculpture</p>
            <p>Scottish Silver & Accessories</p>
            <p>Silver & Objects of Vertu</p>
            <p>Sporting Art</p>
            <p>Studio & Contemporary Ceramics</p>
            <p>Tapestries & Textiles</p>
          </div>
          <div className={styles.alphabet_3column_UZ}>
            <h5>U-Z</h5>
            <p>Vintage Posters</p>
            <p>Watches</p>
            <p>Whisky & Wine</p>
            <p>Works of Art & Sculpture</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default Alphabet;
