import React from 'react'
import gautruc from "../assets/gautruc.webp"

const Home = () => {
  return (
    <>
    <div style={{textAlign: "center", fontSize: "32px", color:"red"}}>CHÀO MỪNG ĐẾN CỬA HÀNG CỦA CHÚNG TÔI</div>
    <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>

      <img src = {gautruc} alt = "logo" style={{width: "300px", height: "300px"}}/>
      <img src = {gautruc} alt = "logo" style={{width: "300px", height: "300px"}}/>

    </div>
    
    <footer style={{margin:"12px", textAlign:"center", color: "red"}} >MONG BẠN CÓ TRẢI NGHIỆM MUA HÀNG THẬT HẠNH PHÚC</footer>
    
    </>
  )
}

export default Home