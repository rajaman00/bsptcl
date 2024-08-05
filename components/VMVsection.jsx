import React, { useEffect } from 'react';
import '../components/css/VMVsection.css';
import AOS from "aos";
import "aos/dist/aos.css";
// import visionImage from '../public/images/VMVsection/minion.jpg';
// import missionImage from '../public/images/VMVsection/mission.jpg'
// import valueImage from '../public/images/VMVsection/value.jpg'



function VMVsection() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="VMV">
        {/* Vision Div */}
        <div className="vision" data-aos="fade-right" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <div className="vmvImage">
            <div className="vmvText">
              <h4 className='text-center'>Vision</h4>
              <p style={{ textAlign: 'justify' }}>To deliver excellence in service, innovation, efficiency, and sustainability for driving the growth and development of communities and industries, while ensuring environmental stewardship and maximizing value for the people of the state.</p>
            </div>
          </div>
        </div>


        {/* Mission Div */}
        <div className="mission" data-aos="fade-down" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <div className="vmvImage">
            <div className="vmvText">
              <h4 className='text-center'>Mission</h4>
              <p style={{ textAlign: 'justify' }}>Striving to achieve the vision of the company by:</p>
              <ul>
                <li>Committment to operational excellence, innovation and sustainability, ensuring uninterrupted and quality delivery of power.</li>
                <li>Adoption of world-class technology and practices to ensure the efficient and reliable delivery of electricity from power generation sources to distribution networks and directly to open-access consumers</li>
                <li>Adopting cost-effective power transmission services that support economic growth and improve the quality of life for the people of the state.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Value Div */}
        <div className="value" data-aos="fade-left" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <div className="vmvImage">
            <div className="vmvText">
              <h4 className='text-center'>Value</h4>
              {/* <p style={{ textAlign: 'justify' }}>Transparency, Accountability and Integrity.</p>
              <p style={{ textAlign: 'justify' }}>Quality service and social responsibility.</p>
              <p style={{ textAlign: 'justify' }}>Responsive to change and new developments.</p> */}
              <ul>
                <li>Transparency, Accountability and Integrity.</li>
                <li>Quality service and social responsibility.</li>
                <li>Responsive to change and new developments.</li>
               
              </ul>
                
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// function VMVsection() {

//   //Vission
//   const beforeVision = (<div className='beforHover' style={{ backgroundImage: `url(${visionImage})` }}>
//   </div>);
//   const afterVision = (<><div className='afterHover'></div>
//     <div className='hoverText'>
//       <h4>Vission</h4>
//       Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quae omnis maiores harum earum sunt nisi quia, deserunt perferendis vel corporis asperiores eum quam doloremque voluptatibus sapiente numquam rerum libero</div>
//   </>
//   );

//   const beforeMission = (<div className='beforHover' style={{ backgroundImage: `url(${missionImage})` }}>
//   </div>);
// // Mission
//   const afterMission = (<><div className='afterHover'></div>
//     <div className='hoverText'>
//       <h4>Mission</h4>
//       Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quae omnis maiores harum earum sunt nisi quia, deserunt perferendis vel corporis asperiores eum quam doloremque voluptatibus sapiente numquam rerum libero</div>
//   </>
//   );

//   const beforeValue = (<div className='beforHover' style={{ backgroundImage: `url(${valueImage})` }}>
//   </div>);
// // value 
//   const afterValue = (<><div className='afterHover'></div>
//     <div className='hoverText'>
//       <h4>Value</h4>
//       Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quae omnis maiores harum earum sunt nisi quia, deserunt perferendis vel corporis asperiores eum quam doloremque voluptatibus sapiente numquam rerum libero</div>
//   </>
//   );

//   const [vision, setVision] = useState(beforeVision);
//   const [mission, setMission] = useState(beforeMission);
//   const [value, setValue] = useState(beforeValue)



//   return (
//     <div className='VMV'>
//       <div className='vision' onMouseOver={() => { setVision(afterVision) }} onMouseOut={() => { setVision(beforeVision) }}>
//         {vision}
//       </div>

//       <div className='mission' onMouseOver={() => { setMission(afterMission) }} onMouseOut={() => { setMission(beforeMission) }}>
//         {mission}
//       </div>

//       <div className='value' onMouseOver={() => { setValue(afterValue) }} onMouseOut={() => { setValue(beforeValue) }}>
//         {value}
//       </div>
//     </div>
//   );
// }

export default VMVsection;
