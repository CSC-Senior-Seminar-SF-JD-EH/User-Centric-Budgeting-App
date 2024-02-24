import React from "react";
import './Home.css';
import moneyCart from '../assets/moneyCart.png';
import tycheNameLogo from '../assets/TycheNameLogo.png'
import { TiThMenu } from "react-icons/ti";



function Home() 
{
    return (
      
        <div class="container">
      
          <div class="div-1">
            <div class="dropdown">
              <div class ="menubar">
                <TiThMenu size={43}/>
              </div>

                <div class="dropdown-content">
                  <a href="#">Profile</a>
                  <a href="#">Settings</a>
                  <a href="#">Log Out</a>
                </div>
            </div>
            <img class ="logo" src={tycheNameLogo} alt="Tyche Logo"/>
        
            <div class="line"></div>
            <h1>Easily manage your finances with Tyche</h1>
            <h2>Tyche generates personalized budgets so you don't have to stress about your finances</h2>
            <img class="money-img" src={moneyCart}  alt="Money Cartoon"/>
            <div class="signUpemail">
              <input type="text" placeholder="Email address"/>
            </div>
              <div className="submit-button">
                <input type="submit" value="Sign Up" />
            </div>
          </div>
        </div>
    );
  }
  
  export default Home;
