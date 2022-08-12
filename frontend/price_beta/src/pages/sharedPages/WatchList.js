import React from "react";
import styled from "styled-components";
import wl_img_first from "../../assets/images/watch_list/104PX_first.svg"
import wl_img_second from "../../assets/images/watch_list/104PX_second.svg"
import wl_img_third from "../../assets/images/watch_list/104PX_third.svg"
import wl_img_fourth from "../../assets/images/watch_list/104PX_fourth.svg"
import wl_img_fifth from "../../assets/images/watch_list/104PX_fifth.svg"
import wl_img_sixth from "../../assets/images/watch_list/104PX_sixth.svg"
// import delete_icon from "../../assets/images/watch_list/Vector.svg"

const WatchList = () => {
  return (
    <RedirectWrapper class="redirect">
      <div>
        <header>
          <h3 class="headerh3">
            <a href="/">Home</a>
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
              <h1 class="product_name">
                Digitech SP Max Wireless Advanced Model Gaming Laptop - 15.6”
                QHD
              </h1>
              <h1 class="product_price">₦750,000.75</h1>
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
                <img src="" alt="" />
              </button>
            </div>
          </section>
          {/* product 2 */}
          <section class="wl">
            <figcaption class="wl_img">
              <img src={wl_img_second} alt="product_image" />
            </figcaption>
            <div class="product_details">
              <h1 class="product_name">
                Jones Wears Marshemellow Printed HOODIE
              </h1>
              <h1 class="product_price">₦4,559.75</h1>
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
                <img src="" alt="" />
              </button>
            </div>
          </section>
          {/* product 3 */}
          <section class="wl">
            <figcaption class="wl_img">
              <img src={wl_img_third} alt="product_image" />
            </figcaption>
            <div class="product_details">
              <h1 class="product_name">
                Kiki New Gain LED Display Cordless Rechargeable Clipper
              </h1>
              <h1 class="product_price">₦6,000.00</h1>
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
                <img src="" alt="" />
              </button>
            </div>
          </section>
          {/* product 4 */}
          <section class="wl">
            <figcaption class="wl_img">
              <img src={wl_img_fourth} alt="product_image" />
            </figcaption>
            <div class="product_details">
              <h1 class="product_name">Golden Penny Vegetable Oil - 500ml</h1>
              <h1 class="product_price">₦990.50</h1>
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
                <img src="" alt="" />
              </button>
            </div>
          </section>
          {/* product 5 */}
          <section class="wl">
            <figcaption class="wl_img">
              <img src={wl_img_fifth} alt="product_image" />
            </figcaption>
            <div class="product_details">
              <h1 class="product_name">Sony 55 inch flat screen premium</h1>
              <h1 class="product_price">₦690,070.22</h1>
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
                <img src="" alt="" />
              </button>
            </div>
          </section>
          {/* product 6 */}
          <section class="wl">
            <figcaption class="wl_img">
              <img src={wl_img_sixth} alt="product_image" />
            </figcaption>
            <div class="product_details">
              <h1 class="product_name">
                200 Carat Gold Teardrop Engagement Ring
              </h1>
              <h1 class="product_price">₦750,000.75</h1>
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
                <img src="" alt="" />
              </button>
            </div>
          </section>
        </main>
      </div>
    </RedirectWrapper>
  );
};

const RedirectWrapper = styled.div`
 
`;

export default WatchList;
