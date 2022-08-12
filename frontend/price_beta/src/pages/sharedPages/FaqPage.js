import React from 'react'
import styled from 'styled-components'

const FaqPage = () =>{
    return(
        <FaqContainer>
            <div class="FAQ">
                <div class="home-txt">
                    <h3><a href="/" class="home">Home</a> &gt;&gt; <a href="/">FAQ'S</a></h3>
                    <p>Frequently Asked Questions(Help Center)</p></div>
            
                <div class="first-qtn">
                    <a href="#price-div">How to compare prices</a>
                    <a href="#add-prod">How to add to my product list</a>
                    <a href="#alert-div">How to get price alerts</a>
                </div>    
                <div class="second-qtn">
                    <a href="#err-div">How to report an error</a>
                    <a href="#pass-div">How to reset your password</a>
                    <a href="#lett-div">How to unsubscribe from our newsletter</a>
                </div> 
                <div class="faq-wrap">
                    <div class="prices-div" id="price-div">
                        <h2>How to compare prices</h2>
                        <p>You would like to compare prices for a product? Great!!!</p>
                        <p>First thing to take into consideration is searching for your specific product.</p>
                        <p>You can simply use our search option and type in your preferred product or via our general product list pages to browse products of different categories.</p>
                        <img src="./categoryimages/IMG_1745.PNG" alt=""/>
                        <p>Click on the compare button to be refer to different stores and view the comparison prices, reviews and so many others.</p>
                        <img src="./categoryimages/IMG_1733.PNG" alt=""/>
                        <img src="./categoryimages/IMG_1740.PNG" alt=""/>
                    </div>  
                    <div class="add-product" id="add-prod">
                        <h2>How to add to product list.</h2>
                        <p>To enjoy this feature, you have to be a registered user of our websit services. ScoutVendour only wishes to give our user the best experience when using our services.</p>
                        <img src="./categoryimages/IMG_1735.PNG" alt=""/>
                        <img src="./categoryimages/IMG_1750.PNG" alt=""/>
                        <img src="./categoryimages/IMG_1748.PNG" alt=""/>
                    </div> 
                    <div class="alerts-div" id="alert-div">
                        <h2>How to get price alerts</h2>
                        <p>To enjoy this feature you have to be a registered user of our website services as well subscibing to our newsletters. ScoutVendour only wishes to give our user the best experience when using our services.</p>
                        <p>Go to your favourite page (this is only after you have added a product to your favourites.) Input the price range of want the get alerts and add to watch list to get prices updates via email.</p>
                        <img src="./categoryimages/IMG_1753.PNG" alt=""/>
                    </div>
                    <div class="error-div" id="err-div">
                        <h2>How to report an error</h2>
                        <p>To enjoy this feature you have to be a registered user of our website services. ScoutVendour only wishes to give our user the best experience when using our services.</p>
                        <p>Remember that ScoutVendour is a price comparison service and not a shopping service. Go to our Contact Us at the end page and we will be in touch within 28-48 hours. </p>
                        <img src="./categoryimages/IMG_1738.PNG" alt=""/>
                    </div>
                    <div class="password-div" id="pass-div">
                        <h2>How to reset your password</h2>
                        <p>Go to your profile, check for the login and security section and change password.</p>
                        <img src="./categoryimages/IMG_1744.PNG" alt=""/>
                        <img src="./categoryimages/IMG_1746.PNG" alt=""/>
                    </div>
                    <div class="letter-div" id="lett-div">
                        <h2>How to unsubscribe from our newsletters</h2>
                        <p>You can delete an item from your favourite to stop receiving alerts on that product or go to your profile, then email preference section and unsubscribe.</p>
                        <img src="./categoryimages/IMG_1752 (1).PNG" alt=""/>
                    </div>
                </div>
                <p class="help-text">Was this page helpful? for more ways to help, reach us on  our <a href="/">contact page</a> </p>
                <span class="thumbs"><i class="fa-solid fa-thumbs-up"></i> <i class="fa-solid fa-thumbs-down"></i></span>

            </div>

        </FaqContainer>
    )
}


const FaqContainer = styled.div`
.FAQ{
    padding: 10px;
}
.home-txt h3{
    font-family: 'Inter', sans-serif;
    padding: 12px;
    font-size: 20px;
    
}
.home-txt p{
    padding: 12px;
}
.home-txt a{
    font-family: 'Inter', sans-serif;
}
.home-txt .home{
    color: #000000;
}
.home-txt h3 a{
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    color: orange;
    padding-bottom: 7px;
    

}
.faq-wrap{
    background-color: #fff;
    margin: 25px auto;
    padding: 15px;
    border: 1px solid #954A04;
}

.faq-wrap img{
    margin: auto 25%;
    border: 1px solid #969595;
    
    
}
.first-qtn, .second-qtn{
    display: flex;
    padding: 5px;
    
}
.first-qtn a{
    width: 30%;
    border: 1.2px solid #969595;
    padding: 6px 12px;
    margin-left: 12px;
    border-radius: 8px;
    color: orange;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
}
.second-qtn a{
    width: 30%;
    border: 1.2px solid #969595;
    padding: 1px 12px;
    margin-left: 12px;
    border-radius: 8px;
    color: orange;
    text-decoration: none;

}
.faq-wrap h2{
    padding: 12px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;

}
.faq-wrap p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;;
    padding: 6px;
}
.password-div img{
    display: flex;
}
.FAQ .help-text{
    text-align: center;
    font-weight: 600;
    font-size: 20px;
}
@media screen and (max-width: 1400px){
    .FAQ{
        padding: 10px;
    }
    .home-txt h3{
        font-family: 'Inter', sans-serif;
        padding: 12px;
        font-size: 20px;
        
    }
    .home-txt p{
        padding: 12px;
    }
    .home-txt a{
        font-family: 'Inter', sans-serif;
    }
    .home-txt h3 a{
        text-decoration: none;
        font-family: 'Inter', sans-serif;
        color: orange;
        padding-bottom: 7px;
    }
    .faq-wrap{
        background-color: #fff;
        margin: 25px auto;
        padding: 15px;
        border: 1px solid #954A04;
    }
    
    .faq-wrap img{
        margin: auto 15%;
        border: 1px solid #969595;
    }
    .first-qtn, .second-qtn{
        display: flex;
        padding: 5px;
        
    }
    .first-qtn a{
        width: 30%;
        border: 1.2px solid #969595;
        padding: 6px 12px;
        margin-left: 12px;
        border-radius: 8px;
        color: orange;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }
    .second-qtn a{
        width: 30%;
        border: 1.2px solid #969595;
        padding: 1px 12px;
        margin-left: 12px;
        border-radius: 8px;
        color: orange;
        text-decoration: none;
    
    }
    .faq-wrap h2{
        padding: 12px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 48px;
    
    }
    .faq-wrap p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;;
        padding: 12px;
    }

    .FAQ .help-text{
        text-align: center;
        font-weight: 600;
        font-size: 20px;
    }
    .FAQ .help-text a{
        color: orange;
    }
    .FAQ .thumbs{
        display: inline-flex;
        margin: auto 50%;
    }
    
    .FAQ .thumbs i{
        color: #969595;
        padding: 22px;
        font-size: 40px; 
    }
    
}

@media screen and (max-width: 920px){
    .FAQ{
        width: 100%;
    }
    .faq-wrap{
        width: 100%;
    }
    .faq-wrap img{
        width: 80%;
        margin: auto 15%;
        border: 1px solid #969595; 
    }

}
@media screen and (max-width: 500px){
    .FAQ{
        width: 400px;
    }
    .first-qtn ,.second-qtn{
        flex-direction: column;
        
    }
    .first-qtn a,.second-qtn a{
        width: 100%;
        border: none;
        padding: 10px;
        list-style: circle;
    }
    .faq-wrap h2{
        font-size: 20px;
        padding: 9px;
    }
    .faq-wrap p{
        font-size: 14px;
        padding: 9px;
    }
    .FAQ .thumbs{
        display: inline-flex;
        margin: auto 25%;
    }
    .FAQ .help-text{
        font-size: 10px;
    }
}

`

export default FaqPage