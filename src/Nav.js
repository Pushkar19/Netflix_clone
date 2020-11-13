import React,{useState,useEffect} from 'react'

function Nav() {
 const [navbar,Navbarshow] = useState(false);
 useEffect(()=>{
  window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
          Navbarshow(true);
      }else{
          Navbarshow(false);
      }
  })
  return()=>{
      window.removeEventListener("scroll");
  }
 },[]);

    return (
        <div className={`nav ${navbar &&"nav__black"}`}>
          <img className="nav__logo"
           src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
           alt="Netflix logo"
           />
           <img 
           className="nav__avatar"
           src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg" 
           alt="Netflix avatar"/>
            
        </div>
    )
}

export default Nav
