import React from 'react'
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <div className = 'footer-container'>
        <div className = 'container'>
            <div className = 'row'>
                {/* Column 1 */}
                <div className = 'col'>
                    <div>
                        <a href='https://m.facebook.com/AlgoBuenoVersalles/'><i class="fa-brands fa-square-facebook fa-3x"></i></a>
                    </div>
                    <div>
                       <a href='https://www.instagram.com/algobuenopv/'><i class="fa-brands fa-square-instagram fa-3x"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className = 'container'>
            <div className = 'row'>
                {/* Column 1 */}
                <div className = 'col'> 
                    <img src='https://res.cloudinary.com/dcksmtfuz/image/upload/v1661623843/algoBueno-logo_rj1zju.png' className='logo'/>
                    <Typography sx={{fontFamily:'Fugaz One'}}>
                        <h4>Algo Bueno</h4>
                    </Typography>
                </div>
            </div>
        </div>
        <div className = 'container'>
            <div className = 'row'>
                {/* Column 1 */}
                <div className = 'col'>
                    <Typography sx={{fontFamily:'Fugaz One'}}> 
                        <h4>Calle Roma 126 int A Col. Díaz Ordaz 48310, Puerto Vallarta, Jal.</h4>
                    </Typography>
                    <cr className = 'copyright'>
                        Ⓒ algobuenopv.com
                    </cr>
                </div>
            </div>
        </div>
    </div>
  )
}
