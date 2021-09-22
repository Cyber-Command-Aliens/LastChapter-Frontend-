import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './aboutus.scss'
import img1 from './img/rami.jpg';
import img2 from './img/farouk.png';
import img3 from './img/omer.jpg';
import img4 from './img/aseel.jpg';
import img5 from './img/yousef.jpg';
import Logo1 from './img/icon_linkedin.png';
import Logo2 from './img/icon-github.png';
class AboutUs extends React.Component {
    render() {
        return (
            <section style={{marginBottom:"8rem"}}>
 <div class='all'>
            
                <div id='div1' >
                    <p class='tit'>LastChapter</p>
                    <p class='par1'> a small  site that helps the  users to find their favorite books in various fields of science and entertainment. Our site is a non-profit site that encourages reading by seeing other people's reviews of books in addition to a description of each book</p>
                </div>
                <div id='div2'>
                    <p class='tit'>Team</p>
                    <p class='par1'> Aliens Cyber Command is a team of five web developers</p>
                    <div class="image-a">
                        <div class="image-abot">
                            <img class='team1' src={img1} />
                            <p class='team2'>Rami Zaitoun</p>
                            <div className="shoe-container">
                                <a href="https://github.com/MasteRminD6666">
                                    <img src={Logo1} class='team3' alt="" width='20px' height='20px' />
                                </a>
                                <a href="https://github.com/MasteRminD6666">
                                    <img src={Logo2} class='team3' alt="" width='20px' height='20px' />
                                </a>
                            </div>
                        </div>
                        <div class="image-abot">
                            <img class='team1' src={img2} />
                            <p class='team2'> Farouk Ibrahim </p>
                            <div className="shoe-container">
                                <a href="https://github.com/FaroukIbrahim-FII">
                                    <img src={Logo1} class='team3' alt="" width='20px' height='20px' />
                                </a>
                                <a href="https://github.com/FaroukIbrahim-FII">
                                    <img src={Logo2} class='team3' alt="" width='20px' height='20px' />
                                </a>
                            </div>
                        </div>
                        <div class="image-abot">
                            <img class='team1' src={img3} />
                            <p class='team2'>Omar Humamah </p>
                            <div className="shoe-container">
                                <a href="https://github.com/OmarHumamah">
                                    <img src={Logo1} class='team3' alt="" width='20px' height='20px' />
                                </a>
                                <a href="https://github.com/OmarHumamah">
                                    <img src={Logo2} class='team3' alt="" width='20px' height='20px' />
                                </a>
                            </div>
                        </div>
                        <div class="image-abot">
                            <img class='team1' src={img4} />
                            <p class='team2'>Aseel Alasaad</p>
                            <div className="shoe-container">
                                <a href="https://github.com/AseelAlasaad">
                                    <img src={Logo1} class='team3' alt="" width='20px' height='20px' />
                                </a>
                                <a href="https://github.com/AseelAlasaad">
                                    <img src={Logo2} class='team3' alt="" width='20px' height='20px' />
                                </a>
                            </div>
                        </div>
                        <div class="image-abot">
                            <img class='team1' src={img5} />
                            <p class='team2'>Yousef Mando</p>
                            <div className="shoe-container">
                                <a href="https://github.com/yousefmamdo">
                                    <img src={Logo1} class='team3' alt="" width='20px' height='20px' />
                                </a>
                                <a href="https://github.com/yousefmamdo">
                                    <img src={Logo2} class='team3' alt="" width='20px' height='20px' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
           
        )
    }
}
export default (AboutUs);