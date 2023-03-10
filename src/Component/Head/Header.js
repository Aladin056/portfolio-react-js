import React ,{ useState }  from 'react'
import "./Header.css"
 const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
      })
      // Toogle Menu
      const [Mobile, setMobile] = useState(false)
  return (
    <header className='header'>
        <div className='container d_flex'>
            <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}                  
                    <li><a href='#accueil'>Accueil</a></li>
                    <li><a href='#apropos'>À propos de moi</a></li>
                    <li><a href='#competances'>Compétences</a></li>
                    <li><a href='#parcours'>Mon parcours</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
            </div>
        </div>
    </header>
  )
}
export default Header