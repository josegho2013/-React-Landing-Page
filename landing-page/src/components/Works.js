import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../styles/works.css"

const Works = () => {
  return (
    <div className='works-container' >
       <Navbar />

      <div>
     <img  className="img-card" src='https://economipedia.com/wp-content/uploads/Inicio-de-un-proyecto.jpg' />
     <h2>nombre de proyecto</h2>
     <button>ver codigo</button>
     <button>ver deploy</button>
     </div>
     
     <div>
     <img  className="img-card" src='https://economipedia.com/wp-content/uploads/Inicio-de-un-proyecto.jpg' />
     <h2>nombre de proyecto</h2>
     <button>ver codigo</button>
     <button>ver deploy</button>
     </div>
     
     <div>
     <img  className="img-card" src='https://economipedia.com/wp-content/uploads/Inicio-de-un-proyecto.jpg' />
     <h2>nombre de proyecto</h2>
     <button>ver codigo</button>
     <button>ver deploy</button>
     </div>
     
     <div>
     <img  className="img-card" src='https://economipedia.com/wp-content/uploads/Inicio-de-un-proyecto.jpg' />
     <h2>nombre de proyecto</h2>
     <button>ver codigo</button>
     <button>ver deploy</button>
     </div>
     
     <div>
     <img  className="img-card" src='https://economipedia.com/wp-content/uploads/Inicio-de-un-proyecto.jpg' />
     <h2>nombre de proyecto</h2>
     <button>ver codigo</button>
     <button>ver deploy</button>
     </div>
     
     <div>
     <img  className="img-card" src='https://economipedia.com/wp-content/uploads/Inicio-de-un-proyecto.jpg' />
     <h2>nombre de proyecto</h2>
     <button>ver codigo</button>
     <button>ver deploy</button>
     </div>
   
     <Footer />
      </div>
  )
}

export default Works