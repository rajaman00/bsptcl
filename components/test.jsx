import Card from 'react-bootstrap/Card';
import cmImg from '../public/images/nitishkumar.jpg'
import './css/test.css'

function Test() {
  

  return (
      
      <>
       <div className="cmCard">
          <div >
            <img src={cmImg} alt="CM Image" className="cmImage"/>
          </div>
          <div className='cardText'>
            <h5 className='text-center'>Chief Minister</h5>
            <p className='text-center'>Nitish Kumar</p>
          </div>
       </div>
      </>
      
  
  );
}


export default Test;