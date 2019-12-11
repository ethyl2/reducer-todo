import React from 'react';
import arrow from '../arrow.png';

const Footer = () => {
    return (
        <footer>
            <div>
                <h3>Hunger Games Parody Songs</h3>
                <a href="https://youtu.be/JXO44xIvyuY">Peeta's Song</a>
                <a href="https://youtu.be/am1tzttZ8Pc">Katniss' Song</a>
                <a href="https://youtu.be/1cayQGVTwjs">Gale's Song</a>
               
            </div>
            <div className='footer-misc'> 
                <img src={arrow} className='arrow' alt='arrow' />
                <a href='https://www.stockio.com/free-icon/nature-icons-flame'>Icon Source</a>
                <p> Copyright 2019 Heather Nuffer</p>
            </div>
        </footer>
    )
}

export default Footer;