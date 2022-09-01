import { Typography } from '@mui/material'
import React from 'react';

export default function Homepage() {
  return (
    <>
    <div className="slider-box"> 
        <section className='section'>
          <item className = 'menu-item'>
            <Typography sx={{fontFamily:'Fugaz One'}}>
              <p>Algo Classico</p>
              <img src='https://res.cloudinary.com/dcksmtfuz/image/upload/v1661988482/classico_2_bckdxk.png' className = 'classico'/>
              <p>Pepinillos | Salsa Picante </p>
            </Typography>
          </item>
          <item className = 'menu-item'>
            <Typography sx={{fontFamily:'Fugaz One'}}>
              <p>La Bella</p>
              <img src='https://res.cloudinary.com/dcksmtfuz/image/upload/a_355/v1661903187/bella_b7ndfb.png' className = 'bella'/>
              <p>Jamón | Albahaca | Queso Mozzarella</p>
            </Typography>
          </item>
          <item className = 'menu-item'>
            <Typography sx={{fontFamily:'Fugaz One'}}>
              <p>Ceasar Club</p>
                <img src='https://res.cloudinary.com/dcksmtfuz/image/upload/v1661903171/ceasar_g8au9p.png' className = 'ceasar'/>
              <p>Tocino | Lechuga | Jitomate</p>
            </Typography>
          </item>
        </section>
      
        
        <section className='section'>
            <item className = 'menu-item'>
              <Typography sx={{fontFamily:'Fugaz One'}}>
                <p>Algo Classic</p>
                <img src='https://res.cloudinary.com/dcksmtfuz/image/upload/v1661988482/classico_2_bckdxk.png' className = 'classico'/>
                <p>Pickles | Algo Sauce </p>
              </Typography>
            </item>
            <item className = 'menu-item'>
              <Typography sx={{fontFamily:'Fugaz One'}}>
                <p>The Bella</p>
                <img src='https://res.cloudinary.com/dcksmtfuz/image/upload/a_355/v1661903187/bella_b7ndfb.png' className = 'bella'/>
                <p>Proscutto | Basil | Mozzarella</p>
              </Typography>
            </item>
            <item className = 'menu-item'>
              <Typography sx={{fontFamily:'Fugaz One'}}>
                <p>Ceasar Club</p>
                  <img src='https://res.cloudinary.com/dcksmtfuz/image/upload/v1661903171/ceasar_g8au9p.png' className = 'ceasar'/>
                <p>Bacon | Lettuce | Tomato</p>
              </Typography>
            </item>
        </section>
    </div>
    </>
  )
}
