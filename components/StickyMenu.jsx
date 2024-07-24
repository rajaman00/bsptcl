import React, { useState } from 'react'
import '../components/css/stickymenu.css'
import phone from '../public/images/NotificationImages/phone.png'



function StickyMenu() {
    let imgPhone = <img src={phone} alt="" style={{width:'2.5rem',height:'2.5rem'}} />
    const [value, setValue] = useState(imgPhone)
    const [value2, setValue2] = useState('APAR')
    const [value3, setValue3] = useState('ESS/MSS')
    const [value4, setValue4] = useState('MEDICLAIM')
    const [value5, setValue5] = useState('FLM/FIORI')
    const [value6, setValue6] = useState('E-MAIL')
    const [value7, setValue7] = useState('TWITTER')
    return (
        <>
            
            <div className="divmenu1" onMouseOver={()=>{setValue('Phone Directory')}}  onMouseOut={()=>{setValue(imgPhone)}}>
                {value}
            </div>
            

            <div className="divmenu2"  onMouseOver={()=>{setValue2('APAR')}}  onMouseOut={()=>{setValue2('APAR')}}>
                {value2}
            </div>

            <div className="divmenu3"  onMouseOver={()=>{setValue3('ESS/MSS')}}  onMouseOut={()=>{setValue3('ESS/MSS')}}>
                {value3}
            </div>

            <div className="divmenu4"  onMouseOver={()=>{setValue4('MEDICLAIM')}}  onMouseOut={()=>{setValue4('MEDICLAIM')}}>
                {value4}
            </div>

            <div className="divmenu5"  onMouseOver={()=>{setValue5('FLM/FIORI')}}  onMouseOut={()=>{setValue5('FLM/FIORI')}}>
                {value5}
            </div>

            <div className="divmenu6"  onMouseOver={()=>{setValue6('E-MAIL')}}  onMouseOut={()=>{setValue6('E-MAIL')}}>
                {value6}
            </div>

            <div className="divmenu7"  onMouseOver={()=>{setValue7('TWITTER')}}  onMouseOut={()=>{setValue7('TWITTER')}}>
                {value7}
            </div>
            
            

        </>
    )
}

export default StickyMenu