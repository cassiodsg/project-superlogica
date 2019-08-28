import './Home.css'
import React from 'react'
import Main from '../template/Main'
import MyCustomButton from '../inputs/Button'
import Card from '../surfaces/Card'
import CardGroup from '../surfaces/CardGroup'
import BuyButton from '../inputs/BuyButton'
import cloud from '../../assets/images/cloud.svg';
import cloudWhite from '../../assets/images/cloud-white.svg';
import cart from '../../assets/images/cart.svg';
import cartWhite from '../../assets/images/cart-white.svg';
import Carousel from "../surfaces/Carousel";
import Gotop from '../inputs/GoTopButton'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default props =>
    <Main>
        <article className="wrapper-1">
            <div className="item-1">
                <div>
                    <h1>Uma nova forma de fazer negócios.</h1>
                    <p>A Superlógica oferece um sistema completo para sua empresa escalar na era digital.</p>
                    <MyCustomButton>Saiba mais</MyCustomButton>
                </div>
              
            </div>
            <div className="item-2">
                <div className="card-form">
                    <Card/>
                </div>
                
            </div>
        </article>
        <article className="wrapper-2">
            <div className="item-3">
                <CardGroup> 
                    <ul>
                        <li>
                            <img src={cloud} alt="" />
                        </li>
                        <li>
                            <h1>Plano A</h1>
                        </li>
                        <li>
                            <div>
                            <h2><sup>R$</sup>134</h2>
                            <h6>+ Taxa de Adesão</h6>
                            </div>
                        </li>
                        <li>
                            <div className="text-card">
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Consectetur adipiscing elit</p>
                            <p>Maecenas varius tortor nibh</p>
                            </div>
                        </li>
                        <li>
                            <BuyButton><img src={cartWhite} alt="" />Comprar</BuyButton>
                        </li>
                    </ul>
                </CardGroup>
            </div>
            <div className="item-4">
                <CardGroup> 
                    <ul>
                        <li>
                            <img src={cloud} alt="" />
                        </li>
                        <li>
                            <h1>Plano A</h1>
                        </li>
                        <li>
                            <div>
                            <h2><sup>R$</sup>134</h2>
                            <h6>+ Taxa de Adesão</h6>
                            </div>
                        </li>
                        <li>
                            <div className="text-card">
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Consectetur adipiscing elit</p>
                            <p>Maecenas varius tortor nibh</p>
                            </div>
                        </li>
                        <li>
                            <BuyButton><img src={cartWhite} alt="" />Comprar</BuyButton>
                        </li>
                    </ul>
                </CardGroup>
            </div>
            <div className="item-5">
                <div className="item-custom">
                    <p>Melhor custo-benefício</p>
                </div>
                <CardGroup> 
                    <ul>
                        <li>
                            <img src={cloudWhite} alt="" />
                        </li>
                        <li>
                            <h1>Plano A</h1>
                        </li>
                        <li>
                            <div>
                            <h2><sup>R$</sup>134</h2>
                            <h6>+ Taxa de Adesão</h6>
                            </div>
                        </li>
                        <li>
                            <div className="text-card">
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Consectetur adipiscing elit</p>
                            <p>Maecenas varius tortor nibh</p>
                            </div>
                        </li>
                        <li>
                            <BuyButton><img src={cart} alt="" />Comprar</BuyButton>
                        </li>
                    </ul>
                </CardGroup>
            </div>
            
           
        </article>
        <article className="wrapper-3">
            <div className="item-6">
                <div className="carousel-wrapper">
                    <Carousel />
                </div>
                
            </div>
        </article>
        <Gotop/>
    </Main>