import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import styles from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../features/productSlice";
import { Link } from "react-router-dom";
import { serverUrl } from "../../serverUrl";

const Main = React.memo(() => {
  const products = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const [actdiv, setActdiv] = useState(0);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.first_text}>Latest Auction</div>
      <div className={styles.container_product} >
        {products.map((item, index) => {
          if (index < 4) {
            return (
              <div className={styles.thing_card} key={item._id}>
                <div className={styles.thing_card_img}>
                  <img src={`${serverUrl}/images/${item.image}`} alt="" />
                </div>
                <div className={styles.thing_card_text}>
                  <div className={styles.thing_card_name}>
                    <p>{item.name.substr(0, 15)}</p>
                  </div>
                  <div className={styles.thing_card_description}>
                    <p>{item.description.substr(0, 20) + "..."}</p>
                  </div>
                </div>
                <div className={styles.thing_card_allbuttons}>
                  <div className={styles.thing_card_buttons}>
                    <div className={styles.thing_card_price}>
                      <p>starting price: <b>{item.priceStart}</b> $</p>
                    </div>
                    <div className={styles.thing_card_btn1}>
                      {item.private === true ? (
                        <Link to={`/products`}><button className={styles.thing_card_private}>Private auction</button></Link>
                      ) : (
                        <Link to={`/products`}><button className={styles.thing_card_noprivate}>Participate in the auction</button></Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null
        })}
      </div>



      <div className={styles.container}>
        <div className={styles.caption}> <h1>Auction buying and selling</h1></div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>Selling at Auction</h2>
            <p>Meet the experts and learn more about your art and antiques.</p>
            <h3>
            <Popup trigger={<button className={styles.bt_more}>More {">"}</button>} position="center center">
            {close => ( <div className={styles.popup}><div><h2>Selling at Auction</h2><p>With over 196 years in the auction market, Lyon & Turnbull have garnered an international reputation for specialist art, design and jewellery auctions.  At the heart of our organisation is our commitment to our valued customers, for whom we strive to achieve record breaking results. As one of the UK's premier auction houses, we are proud to combine a dedicated personal service, innovative, thoughtful marketing and a deep understanding of the world of art and antiques to offer an unparalleled auctioneer service. With approximately 45 sales each year across the UK, we specialise in bringing international awareness to both single lot and specialist auctions, with expertise in Asian Art, Jewellery, Scottish Paintings, Modern Design, Sculpture, Fine Art, Furniture, Watches, Rare Books and more. Whether you are looking to consign a newly acquired family heirloom, a watch from your collection or a work of art you may know little about, our auction specialists will guide you every step of the way.</p></div> <a className="close" onClick={close}>
          &times;
        </a></div>)}
           </Popup> 
            </h3>
          </div>
          <div className={styles.card}>
            <h2>Buying at Auction</h2>
            <p>A step-by-step buying guide, from the first look at your property to the time you take it home.</p>
            <h3>
            <Popup trigger={<button className={styles.bt_more}>More {">"}</button>} position="center center">
            {close => (<div className={styles.popup}><div><h2>Buying at Auction</h2><p>Our easy-to-use, secure platform is designed to bring all the excitement of an in-person sale to you at home or on the move.  It’s easy to register with us online, you can watch the auction as it happens and place bids from the comfort of your desktop or mobile device. Follow our checklist below to set up a free account and start bidding online with Lyon & Turnbull. You can set up lot reminders, create a wishlist and enjoy the auction in real time as bids are made and lots are won. Create an account. Click the Get Started button below and follow our simple registration process. We will then send you an email to activate your account.Register to bid live. You can register to bid live on our auction, lot or calendar pages. Place your bids. Place your maximum absentee bid(s) with us on your chosen lots either from the auction page or items saved in your wishlist. Bid Live. On sale day, view our auction in real time, live from our website. Our video below will guide you through our exciting new auction platform which allows you to bid easily on the lots from the comfort of your own home. You can set up lot reminders, create a wishlist and enjoy the auction in real time as bids are made and lots are won. Many clients prefer bidding live online at our auctions.</p> </div><a className="close" onClick={close}>
          &times;
        </a></div> )}
           </Popup>
            </h3>
          </div>
          <div className={styles.card}>
            <h2>Free live Trading</h2>
            <p>Bet online at no extra cost with Lyon & Turnbull Live.</p>
            <h3>
            <Popup trigger={<button className={styles.bt_more}>More {">"}</button>} position="center center">
            {close => ( <div className={styles.popup}><div><h2>Free live Trading</h2><p>As we continue to develop our digital offerings to make it easier for you to join our auctions from anywhere, we are delighted to share an update to our online bidding platform L&T Live in partnership with Streambid. The new interface will provide a seamless change in your bidding experience, where you can continue to enjoy bidding live in all our sales from the comfort of your home, office or on the go. Just follow the familiar links at the head of every online catalogue, lot page or on the auction calendar to register to bid in each sale and enjoy the new experience. While the app will no longer be available, the new fully-responsive interface performs dynamically on any device to make bidding simpler by keeping all of your activity in one place. In this video, we share L&T Live's new display, looking at the dynamic functionality that Streambid offers your bidding experience and answering all of your live bidding questions.</p> </div><a className="close" onClick={close}>
          &times;
        </a></div> )}
           </Popup>
           
           </h3>
          </div>
        </div>
      </div>

    </div>


  );
});

export default Main;