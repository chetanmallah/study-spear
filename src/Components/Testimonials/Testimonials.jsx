import React, { useRef } from 'react'
import back_icon from '../../assets/back-icon.png'
import next_icon from '../../assets/next-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import './Testimonials.css'


const Testimonials = () => {

    const slider = useRef();
let tx = 0;

    const slideForward = () => {
       if(tx > -50) {
 tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx < 0) {
        tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
        

  return (
    <div className='testimonials'>
      <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_1} alt="" />
                    <div>
                        <h3>Aliana Khan</h3>
                        <span>Edusity, india</span>
                    </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                        <h3>Chandan Mallah</h3>
                        <span>Edusity, india</span>
                    </div>
                </div>
                <p>Opting for Edusity for my degree was truly one of my best decisions. The supportive community, top-notch facilities, and dedication to academic excellence have far surpassed my expectations.</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                        <h3>Priya Singh</h3>
                        <span>Edusity, india</span>
                    </div>
                </div>
                <p>Enrolling at Edusity has proven to be one of the wisest choices I've made. The encouraging community, cutting-edge facilities, and unwavering commitment to academic excellence have surpassed all my expectations.</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                        <h3>Chetan Mallah</h3>
                        <span>Edusity, india</span>
                    </div>
                </div>
                <p>Deciding to pursue my degree at Edusity has proven to be one of the most rewarding choices I've made. The nurturing community, outstanding facilities, and unwavering commitment to academic excellence have exceeded all my expectations</p>
            </div>
        </li>
      </ul>
</div>
    </div>
  )
}

export default Testimonials
