import React from "react";
import styled from "styled-components";
import wl_img_first from "../../assets/images/watch_list/104PX_first.svg";
import wl_img_second from "../../assets/images/watch_list/104PX_second.svg";
import wl_img_third from "../../assets/images/watch_list/104PX_third.svg";
import wl_img_fourth from "../../assets/images/watch_list/104PX_fourth.svg";
import wl_img_fifth from "../../assets/images/watch_list/104PX_fifth.svg";
import wl_img_sixth from "../../assets/images/watch_list/104PX_sixth.svg";


const WatchList = () => {
  return (
    <WatchListContainer>
      <div>
        <header>
          <h3 class="headerh3">
            <a href="/">Home&nbsp; &gt;&gt; &nbsp;<span>WatchList</span></a>
          </h3>
          <h1 class="headerh1">Your Watchlist</h1>
        </header>

        <main class="main-container">
          {/* product 1 */}
          <section class="wl">
            <figcaption class="wl_img">
              <img src={wl_img_first} alt="product_image" />
            </figcaption>
            <div class="product_details">
              <p class="product_name">
                Digitech SP Max Wireless Advanced Model Gaming Laptop - 15.6”
                QHD 
              </p>
              <p class="product_price">₦750,000.75</p>
              <input
                type="number"
                name="watch_list_price"
                id=""
                class="wl_price"
                placeholder="Set Preffered  Price ?"
              />
              <button type="submit" class="add_wl_btn">
                Add to watchlist
              </button>
              <button type="button" class="remove_wl_btn">
                Remove Item
              </button>
            </div>
          </section>
          {/* product 2 */}
          <section class="wl">
            <figcaption class="wl_img">
              <img src={wl_img_second} alt="product_image" />
            </figcaption>
            <div class="product_details">
              <p class="product_name">
                Jones Wears Marshemellow Printed HOODIE
              </p>
              <p class="product_price">₦4,559.75</p>
              <input
                type="number"
                name="watch_list_price"
                id=""
                class="wl_price"
                placeholder="Set Preffered  Price ?"
              />
              <button type="submit" class="add_wl_btn">
                Add to watchlist
              </button>
              <button type="button" class="remove_wl_btn">
                Remove Item
              </button>
            </div>
          </section>
          {/* product 3 */}
          <section class="wl">
            <figcaption class="wl_img">
              <img src={wl_img_third} alt="product_image" />
            </figcaption>
            <div class="product_details">
              <p class="product_name">
                Kiki New Gain LED Display Cordless Rechargeable Clipper
              </p>
              <p class="product_price">₦6,000.00</p>
              <input
                type="number"
                name="watch_list_price"
                id=""
                class="wl_price"
                placeholder="Set Preffered  Price ?"
              />
              <button type="submit" class="add_wl_btn">
                Add to watchlist
              </button>
              <button type="button" class="remove_wl_btn">
                Remove Item
              </button>
            </div>
          </section>
          {/* product 4 */}
          <section class="wl">
            <figcaption class="wl_img">
              <img src={wl_img_fourth} alt="product_image" />
            </figcaption>
            <div class="product_details">
              <p class="product_name">Golden Penny Vegetable Oil - 500ml</p>
              <p class="product_price">₦990.50</p>
              <input
                type="number"
                name="watch_list_price"
                id=""
                class="wl_price"
                placeholder="Set Preffered  Price ?"
              />
              <button type="submit" class="add_wl_btn">
                Add to watchlist
              </button>
              <button type="button" class="remove_wl_btn">
                Remove Item
              </button>
            </div>
          </section>
          {/* product 5 */}
          <section class="wl">
            <figcaption class="wl_img">
              <img src={wl_img_fifth} alt="product_image" />
            </figcaption>
            <div class="product_details">
              <p class="product_name">Sony 55 inch flat screen premium</p>
              <p class="product_price">₦690,070.22</p>
              <input
                type="number"
                name="watch_list_price"
                id=""
                class="wl_price"
                placeholder="Set Preffered  Price ?"
              />
              <button type="submit" class="add_wl_btn">
                Add to watchlist
              </button>
              <button type="button" class="remove_wl_btn">
                Remove Item
              </button>
            </div>
          </section>
          {/* product 6 */}
          <section class="wl">
            <figcaption class="wl_img">
              <img src={wl_img_sixth} alt="product_image" />
            </figcaption>
            <div class="product_details">
              <p class="product_name">
                200 Carat Gold Teardrop Engagement Ring
              </p>
              <p class="product_price">₦750,000.75</p>
              <input
                type="number"
                name="watch_list_price"
                id=""
                class="wl_price"
                placeholder="Set Preffered  Price ?"
              />
              <button type="submit" class="add_wl_btn">
                Add to watchlist
              </button>
              <button type="button" class="remove_wl_btn">
                Remove Item
              </button>
            </div>
          </section>
        </main>
      </div>
    </WatchListContainer>
  );
};

const WatchListContainer = styled.div`
  /*===== CSS RESET =====*/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /*===== GOOGLE INTER FONTS =====*/
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

  /*===== VARIABLES =====*/
  :root {
    --clr-black: #000000;

    --clr-text-black: #131211;

    --clr-grey3: #bcbbba;

    --clr-background: #fff7f0;

    --clr-secondaryOrange: #fadfc7;
    --clr-primaryOrange5: #f88007;
    --clr-primaryOrange4: #c66606;

    --clr-red: red;

    /* fonts */
    --bodyFont: "Inter", sans-serif;
    --bodyLarge: 18px;
    --bodyMedium: 16px;
    --bodySmall: 14px;
    --fontWeight600: 600;
    --fontWeight500: 500;

    /* Others */
    --common-border: 1px solid var(--clr-primaryOrange4);
    --borderRadius: 8px;
    --transition: 0.5s ease-in-out all;
    --fluid-width: 90vw;
    --max-width: 1120px;
  }

  body {
    background-color: var(--clr-background);
    font-family: var(--bodyFont);
  }

  .headerh1 {
    font-size: 32px;
    font-weight: var(fontWeight600);
    line-height: 48px;
    margin: 40px 64px;
  }

  .headerh3 {
    font-size: 20px;
    font-weight: var(fontWeight500);
    line-height: 24px;
    margin: 40px 64px;
  }

  .headerh3 a {
    text-decoration: none;
    color: var(--clr-text-black);
  }

  a span {
    color: var(--clr-primaryOrange5);
  }

  a:hover {
    color: var(--clr-primaryOrange5);
  }

  .wl {
    margin: 49px 72.5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 58px;
    border-bottom: 2px solid var(--clr-grey3);
  }

  img {
    width: 233px;
    height: 232px;
  }

  .product_name {
    padding-bottom: 18px;
    width: 977px;
    font-size: 28px;
    font-weight: var(fontWeight600);
    color: var(--clr-text-black);
  }

  .product_price {
    font-size: 24px;
    color: var(--clr-text-black);
  }

  input,
  button {
    margin-top: 88px;
    height: 52px;
    border-radius: var(--borderRadius);
    margin-bottom: 26px;
  }

  .wl_price {
    padding: 14px 16px;
    width: 282px;
    background-color: var(--clr-background);
    border: 1.2px solid var(--clr-grey3);
  }

  .add_wl_btn {
    padding: 12px 24px;
    width: 220px;
    margin-left: 187px;
    background-color: var(--clr-primaryOrange5);
    border: none;
    color: var(--clr-background);
    transition: 0.5s;
    display: inline-block;
    position: relative;
    text-align: center;
    font-size: 20px;
  }

  .add_wl_btn::after {
    content: "+";
    position: absolute;
    opacity: 0;
    left: -10px;
    transition: var(--transition);
  }

  .add_wl_btn:hover::after {
    opacity: 1;
    left: 15px;
  }

  .add_wl_btn:hover {
    cursor: pointer;
    padding-right: 0.2em;
  }

  .remove_wl_btn {
    width: 190px;
    margin-left: 40px;
    background-color: var(--clr-background);
    border: 1px solid var(--clr-primaryOrange5);
    color: var(--clr-primaryOrange5);
    transition: var(--transition);
    display: inline-block;
    position: relative;
    text-align: center;
    font-size: var(--bodyLarge);
  }

  .remove_wl_btn:hover {
    cursor: pointer;
    background-color: #ee3e54;
    color: var(--clr-background);
    transition: 0.2s;
    transform: scale(1.03);
  }

  /*===== TABLETS VIEWS =====*/
  @media all and (min-width: 767px) and (max-width: 913px) {
    .main-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 7px;
    }

    .wl {
      margin: 40px 80px;
      display: flex;
      flex-direction: column;
    }

    .product_name {
      padding-bottom: 18px;
      width: 90%;
    }

    .wl_price {
      width: 90%;
    }

    .add_wl_btn,
    .remove_wl_btn {
      margin: 10px 0;
      width: 90%;
    }
  }

  /*===== MOBILE VIEWS =====*/
  @media all and (min-width: 280px) and (max-width: 766px) {
    .wl {
      display: flex;
      flex-direction: column;
      margin: 40px 0;
      align-items: center;
    }

    .headerh3,
    .headerh1 {
      margin: 40px 19px;
    }

    .product_name,
    .product_price,
    .wl_price,
    .add_wl_btn,
    .remove_wl_btn {
      width: 90%;
      margin: 0 20px 16px;
    }
  }
`;

export default WatchList;
