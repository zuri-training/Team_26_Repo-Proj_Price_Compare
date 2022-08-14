import React from 'react'
import styled from 'styled-components'

const ProductListPage = () => {
  return (
    <ProductListContainer>
        <h1>Computers & Laptops</h1>
        <div class="container">
            <div class="flex-item-left">
                <img src="./images/productListImg/Digitech.png" alt=" Digitech SP Max  Wireless Advanced Model Gaming "/>
            </div>
            <div class="flex-item-right">
                <div class="item-specs">
                    <h2>
                        Digitech SP Max  Wireless Advanced Model Gaming  Laptop - 15.6” QHD
                    </h2>
                    <p>
                        Gaming computershave taken a wide trend and youre looking for the best for your activities.This laptop features This laptop features <br/> Corei5 <br/> 560GB rom <br/> 32Gb ram 200milli second speed 
                    </p>
                    <button class="btn">compare</button>
                </div>
                <h3>N750,000.75</h3>
                <p>Shipping not included</p>
            </div>
        </div>
        <div class="container">
            <div class="flex-item-left">
                <img src="./images/productListImg/Itel.png" alt=""/>
            </div>
            <div class="flex-item-right">
                <div class="item-specs">
                    <h2>
                        Itel 17 Pro 3G - Galaxy Blue
                    </h2>
                    <p>
                        Gaming computershave taken a wide trend and youre looking for the best for your activities.This laptop features
                       <br/> Corei5
                       <br/> 4GB rom
                       <br/> 156Gb ram
                       <br/> 7000AmH Battery capacity                </p>
                    <button class="btn">compare</button>
                </div>
                   
                <h3>N70,655.75</h3>
                <p>Shipping not included</p>
            </div>
        </div>
        <div class="container">
            <div class="flex-item-left">
                <img src="./images/productListImg/KikiNew.png" alt=""/>
            </div>
            <div class="flex-item-right">
              <div class="item-specs">
                <h2>
                    Kiki New Gain LED Display Cordless Rechargeable Clipper                 </h2>
                <p>
                    Have your own personal clipper with great features
                   <br/> 1 Year Waranty
                   <br/> 4 hours durability
                   <br/> 200 Voltage
                </p>
                <button class="btn">compare</button>
              </div>
                <h3>N6,000.00</h3>
                <p>Shipping not included</p>
            </div>
        </div>
        <div class="container">
            <div class="flex-item-left">
                <img src="./images/productListImg/GamingLaptop.png" alt=""/>
            </div>
            <div class="flex-item-right">
                <div class="item-specs">
                    <h2>
                        Razer Blade 15 Advanced Model Gaming  Laptop - 15.6” QHD     
                    </h2>
                    <p>
                        Gaming computershave taken a wide trend and youre looking for the best for your activities.This laptop features
                       <br/> Corei5
                       <br/>560GB rom
                       <br/>32Gb ram
                       <br/>200milli second speed
                    </p>
                    <button class="btn">compare</button>
                </div>
                <h3>N750,000.75</h3>
                <p>Shipping not included</p>
            </div>
        </div>
        <div class="container">
            <div class="flex-item-left">
                <img src="./images/productListImg/Razer.png" alt=""/>
            </div>
            <div class="flex-item-right">
                <div class="item-specs">
                    <h2>
                        Razer Blade 15 Advanced Model Gaming  Laptop - 15.6” QHD     
                    </h2>
                    <p>
                        Gaming computershave taken a wide trend and youre looking for the best for your activities.This laptop features
                       <br/> Corei5
                       <br/>  560GB rom
                       <br/>   32Gb ram
                       <br/>   200milli second speed
                    </p>
                    <button class="btn">compare</button>
                </div>
                <h3>N750,000.75</h3>
                <p>Shipping not included</p>
            </div>
        </div>
        <div class="container">
            <div class="flex-item-left">
                <img src="./images/productListImg/RazerAdvancedModel GamingLaptop.png" alt=""/>
            </div>
            <div class="flex-item-right">
                <div class="item-specs">
                    <h2>
                        Razer Blade 15 Advanced Model Gaming  Laptop - 15.6” QHD     
                    </h2>
                    <p>
                        Gaming computershave taken a wide trend and youre looking for the best for your activities.This laptop features
                       <br/> Corei5
                       <br/>  560GB rom
                       <br/>   32Gb ram
                       <br/>   200milli second speed
                    </p>
                    <button class="btn">compare</button>
                </div>
                <h3>N750,000.75</h3>
                <p>Shipping not included</p>
            </div>
        </div>
    </ProductListContainer>
  )
}

const ProductListContainer = styled.div`
.btn {
    display: inline-block;
    border-radius: 5px;
    border: none;
    padding: 8px 20px;
    margin: 3px;
    width: 161px;
    height: 40px;
    text-align: center;
    color: #FFFFFF;
    padding: 10px;
    border: 1px solid #F88007;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .btn:hover {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
  }
  
  .btn {
    background-color: #F99939;
  }
  
  .flex-btn {
    background-color: #F99939;
  }
  
  * {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: #FFF7F0;
    color: #140A00;
    font-family: "Inter", sans-serif;
    line-height: 1.6;
  }
  
  .container {
    margin: 3%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    font-size: 18px;
    text-align: justify;
    padding: 10px;
    border-bottom: 1px solid  #4A4A4A;
  }
  
  .container .flex-item-left {
    padding: 10px;
    -webkit-box-flex: 25%;
        -ms-flex: 25%;
            flex: 25%;
  }
  
  .container .flex-item-right {
    padding: 10px;
    -webkit-box-flex: 75%;
        -ms-flex: 75%;
            flex: 75%;
  }
  
  .container .flex-item-right .item-specs {
    margin-bottom: 20px;
  }
  
  @media (max-width: 800px) {
    .container .container {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row;
      font-size: 18px;
      text-align: justify;
      padding: 10px;
      border-bottom: 1px solid  #4A4A4A;
    }
    .container .container .flex-item-left {
      padding: 10px;
      -webkit-box-flex: 25%;
          -ms-flex: 25%;
              flex: 25%;
    }
    .container .container .flex-item-right {
      padding: 10px;
      -webkit-box-flex: 75%;
          -ms-flex: 75%;
              flex: 75%;
    }
    .container .container .flex-item-right .item-specs {
      margin-bottom: 20px;
    }
  }
  
`
export default ProductListPage