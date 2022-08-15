import React from 'react'
import styled from 'styled-components'
import compare_1 from "../../assets/svg/compare_1.svg"
import compare_2 from "../../assets/svg/compare_2.svg"
import compare_3 from "../../assets/svg/compare_3.svg"
import product_1 from "../../assets/svg/product_1.svg"
import product_4 from "../../assets/svg/product_4.svg"
import alerts_1 from "../../assets/svg/alerts_1.svg"
import report_1 from "../../assets/svg/report_1.svg"
import reset from "../../assets/svg/reset.svg"
import newsletter from "../../assets/svg/newsletter.svg"


const UserDocPage = () => {
  return (
    <UserDocWrapper>
      {/* How to Compare Price */}
      <div>
        <h2>How to Compare Price</h2>
        <p>You would like to  compare prices for a product? Great!!! </p>
        <p>First thing to take into consideration is searching for your specific product.</p>
        <p>Your can simply use our seacrh option and type in your preferred product or via our general product list pages to browse throught products of different cartegories</p>
        <img src={compare_1} alt="compare" />
        <p>Click on the compare button to be reffer to different stores and view the comparision price and reviews and so many others</p>
        <img src={compare_2} alt="compare" />
        <p>Click on the compare button to be reffer to different stores and view the comparision price and reviews and so many others</p>
        <img src={compare_3} alt="compare" />
      </div>

      {/* How to Add to Product */}
      <div>
        <h2>How to Add to Product Watchlist</h2>
        <p>To enjoy this feature you have to be a registered user of our website services. ScoutVendor only wishes to give our user the best experience when using our services. </p>
        <p>After searching for a product. You can add a product to your Watchlist (Favourite) by cllcking on the favourite button.</p>
        <img src={product_1} alt="product" />
        <p>Click on to your profile  click on watchlist to  view products added </p>
        <img src={product_4} alt="product" />
      </div>

      {/* How to get price alerts */}
      <div>
        <h2>How to get price alerts</h2>
        <p>To enjoy this feature you have to be a registered user of our website services as well as registration to our newsletters. ScoutVendor only wishes to give our user the best experience when using our services.</p>
        <p>Go to your watchlist page (this is only after you have added a product to your watclist page.) Input the price range of want the  get alerts and add to watch list to get price updates via email.</p>
        <img src={alerts_1} alt="alert" />
      </div>

      {/* How to report an error */}
      <div>
        <h2>how to Report an error</h2>
        <p>To enjoy this feature you have to be a registered user of our website services. ScoutVendor only wishes to give our user the best experience when using our services.</p>
        <p>Remember that ScoutVendor is a price comparision service and not a Shopping service. Go to Contact Us at the end page and we will be in touvh in 24-48 hours.</p>
        <img src={report_1} alt="report" />
      </div>

      {/* How to reset Password */}
      <div>
        <h2>How to reset Password</h2>
        <p>To enjoy this feature you have to be a registered user of our website services. ScoutVendor only wishes to give our user the best experience when using our services.</p>
        <p>Go to Profile and then scroll to  Security to reset password to change password</p>
        <img src={reset} alt="reset" />
      </div>

      {/* How to unsubscribe to Newsletter */}
      <div>
        <h2>How to unsubscribe to Newsletter</h2>
        <p>To enjoy this feature you have to be a registered user of our website services as well as registration to our newsletters. ScoutVendor only wishes to give our user the best experience when using our services.</p>
        <p>You can delete an item from  your favourite to stop recieving alerts on that product or go to Prtofile then scroll to Email preferences to unsubsribe.</p>
        <img src={newsletter} alt="newsletter" />
      </div>

      {/* Text and thumbs div */}
      <div>
        <p>Was this page helpful? Was it great or not helpful. For more ways to help you use ScoutVendor</p>
        <div>
          
        </div>

      </div>


    </UserDocWrapper>
  )
}

const UserDocWrapper = styled.div`
  margin-bottom: 70px;
  padding: 50px 64px;

  div {
    margin-bottom: 40px;
  }
`
export default UserDocPage