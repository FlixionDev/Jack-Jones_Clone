import React from 'react'
import fb_icon from './icons/fb.png'
import insta_icon from './icons/instagram.png'
import twitter_icon from './icons/twitter.png'
import youtube_icon from './icons/youtube.png'
import style from './Footer.module.css'
import { Flex } from '@chakra-ui/react'
export default function Footer() {
    return (
        <div className={style.root}>
            <div className={style.iconsDiv}>
                <img  src={fb_icon} className={style.iconsStyle} />
                <img src={insta_icon} className={style.iconsStyle} />
                <img src={twitter_icon} className={style.iconsStyle} />
                <img src={youtube_icon} className={style.iconsStyle} />
            </div>
            <div>
                <ol className={style.listStyle} >
                    <li>ABOUT US</li>
                    <li>FIND A STORE</li>
                    <li>SIZE GUIDE</li>
                    <li>TRACK ORDER</li>
                </ol>
            </div>
            <div>
                <ol className={style.listStyle}>
                    <li>WHERE IS MY ORDER?</li>
                    <li>FAQ</li>
                    <li>TERMS AND CONDITIONS</li>
                </ol>
            </div>
            <div>
                <ol className={style.listStyle}>
                    <li>ABOUT BESTSELLER</li>
                    <li>CONTACT US</li>
                    <li>PRIVACY POLICY</li>
                </ol>
            </div>
        </div>
    )
}
