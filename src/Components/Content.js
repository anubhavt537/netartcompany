import React from 'react'
import award_png from './asserts/1.png'
import award2_png from './asserts/2.png'
import material_png from './asserts/3.png'
import './Content.css'
export default function Content() {
  return (
    <>
    <div>
        <div className='award_img'>
            <img src={award_png} alt="" />
            <div className='discription'>
            <h1> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
            
       <ul>
        <li>
            C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
        </li>
        <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
       </ul>
       <img src={award2_png} alt="" />
       <p>
       Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
        </div>

    </div>
    <div className='content-2'>
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        <div className='material'>
            <img src={material_png} alt="" />
            
        </div>
        <div className='para-hr'>
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        <hr />
        </div>
        <div className='category'>
<h1>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h1>
<p>
CHEMICALS & PROCESS <hr /> POWER WATER & WASTE <hr />  WATER OILS & GAS <hr />  PHARMA  <hr /> SUGARS & DISTILLERIES <hr />  PAPER & PULP <hr />  MARINE & DEFENCE <hr />  METAL  & MINING  <hr />  FOOD & BEVERAGE <hr />  PETROCHEMICAL & REFINERIES <hr />  SOLAR <hr /> BUILDING <hr /> HVAC <hr /> FIRE FIGHTING  AGRICULTURE & RESIDENTIAL
</p>
        </div>
    </div>
    </>
  )
}
