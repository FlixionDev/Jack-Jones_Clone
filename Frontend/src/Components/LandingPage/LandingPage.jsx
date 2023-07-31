import React, { useEffect, useRef, useState } from 'react'
import r11 from './images/row_1_first.webp'
import r12 from './images/row_1_second.avif'
import r13 from './images/row_1_third.webp'
import Carousel from './Carousel'
import tshirt from './images/t-shirtavif.avif'
import jean from './images/jeans.avif'
import shirt from './images/shirt.avif'
import denimjacket from './images/denimjacket.avif'
import innerwear from './images/innerwear.avif'
import cap from './images/cap.avif'
import sneaker from './images/sneaker.avif'
import jeanfit1 from './images/jeanfit1.webp'
import jeanfit2 from './images/jeanfit2.webp'
import jeanfit3 from './images/jeanfit3.webp'
import jeanfit4 from './images/jeanfit4.webp'
import jeanfit5 from './images/jeanfit5.webp'
import jeanfit6 from './images/jeanfit6.webp'
import ExploreMoreBrands1 from './images/ExploreMoreBrands1.avif'
import ExploreMoreBrands2 from './images/ExploreMoreBrands2.avif'
import ExploreMoreBrands3 from './images/ExploreMoreBrands3.avif'
import ExploreMoreBrands4 from './images/ExploreMoreBrands4.avif'
import ExploreMoreBrands5 from './images/ExploreMoreBrands5.avif'
import ReactPlayer from 'react-player'
import video1 from './videos/homemobdeskranveer.mp4'
import storeLocator from './images/storeLocator.avif'
import Insta from './images/Insta.avif'
import { useSelector } from 'react-redux'
export default function LandingPage() {
    document.title="JackJones.in I Online Shopping for Latest in Shirts, T-shirts, Jeans and Jackets"
    // let reduxdata=useSelector(storeData=>storeData);
    // console.log(reduxdata)
    let arr1 = [r11, r12, r13];
    let arr3 = [denimjacket, innerwear, cap, sneaker]
    let arr4 = [jeanfit1, jeanfit2, jeanfit3, jeanfit4, jeanfit5, jeanfit6];
    //https://jackandjones.onrender.com
    let arr5=[ExploreMoreBrands1,ExploreMoreBrands2,ExploreMoreBrands3,ExploreMoreBrands4,ExploreMoreBrands5]
    const [jeanfit, setJeanfit] = useState(0);
    const [state, setState] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            if (state == arr1.length - 1) {
                setState(0)
            } else {
                setState(state + 1);
            }
        }, 6000)
        return () => {
            clearInterval(timer)
        }
    }, [state])

    //console.log(arr[state])
    return (
        <div>
            <div>
                <img src={arr1[state]} />
            </div>
            <div>
                <Carousel />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", marginTop: "15px" }}>
                <div><img style={{ margin: 'auto' }} src={tshirt} /></div>
                <div><img style={{ margin: 'auto' }} src={jean} /></div>
                <div><img style={{ margin: 'auto' }} src={shirt} /></div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "35% 35%", justifyContent: "center", gap: "40px", marginTop: "30px" }}>
                {
                    arr3.map((el, i) => {
                        return <div key={i + 1}><img src={el} /></div>
                    })
                }
            </div>
            <div>
                <h2 style={{ fontSize: "38px", textAlign: "center", marginTop: "20px" }}>JEANS FIT GUIDE</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: "space-between", width: "80%", margin: 'auto' }}>
                <button onClick={() => {
                    if (jeanfit == 0) {
                        setJeanfit(3)
                    } else {
                        setJeanfit(jeanfit - 1)
                    }
                }} style={{ fontSize: "40px", cursor: "pointer" }}>&lt;</button>
                {arr4.map((el, i) => {
                    if (i >= jeanfit && i <= jeanfit + 2) {
                        return <img style={{ width: "337px", height: "406.7px" }} src={el} />
                    }
                })}
                <button onClick={() => {
                    if (jeanfit == 3) {
                        setJeanfit(0)
                    } else {
                        setJeanfit(jeanfit + 1)
                    }
                }} style={{ fontSize: "40px", cursor: "pointer" }}>&gt;</button>
            </div>
            <div style={{backgroundColor:"rgb(0,40,85)",marginTop:"-7%",paddingBottom:"15px"}}>
            <div style={{width:"72%",margin:"auto",paddingTop:"13%"}}>
                <ReactPlayer url={video1} height='100%' width='100%' controls='true'/>
            </div>
            </div>
            <div><h2 style={{ fontSize: "38px", textAlign: "center"}}>Explore More Brands</h2>
            <div style={{display:'grid',gridTemplateColumns:"30% 30% 30%",justifyContent:"center",marginTop:"20px"}}>
                <div><img src={ExploreMoreBrands1}/></div>
                <div><img src={ExploreMoreBrands2}/></div>
                <div><img src={ExploreMoreBrands3}/></div>  
            </div>
            <div style={{display:'grid',gridTemplateColumns:"30% 30% ",justifyContent:"center",marginTop:"20px"}}>
                <div><img src={ExploreMoreBrands4}/></div>
                <div><img src={ExploreMoreBrands5}/></div>   

            </div>
            </div>
            <div style={{border:"1px solid black",margin:'auto', marginTop:"30px",width:"70%"}}></div>
                <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"20px",marginBottom:"20px"}}>
                    <img src={storeLocator}/>
                    <img src={Insta}/>
                </div>
            </div>
            )
}
