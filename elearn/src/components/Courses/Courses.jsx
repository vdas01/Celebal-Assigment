import "./Courses.css"

const Courses = () => {
  
  return (
    <div className='courses'>
        <h1 id='course_title'>Our Courses</h1>
        <div id="course_container">
           <div className="course_box" id="box1">
              <h4>JavaScript Zero to Hero</h4>
              <img src="https://i.ytimg.com/vi/PwsigsH4oXw/maxresdefault.jpg" alt="" id='box_img'/>
              <div className="sub_btn">
                <span className="price">Rs. 199</span> &nbsp; &nbsp;
                <span className="seats">9 seat left</span>
              </div>
           </div>
           <div className="course_box" id="box2">
               <h4>JavaScript Zero to Hero</h4>
              
              <img src="https://i.ytimg.com/vi/PwsigsH4oXw/maxresdefault.jpg" alt="" id='box_img'/>
              <div className="sub_btn">
                <span className="price">Rs. 199</span> &nbsp; &nbsp;
                <span className="seats">9 seat left</span>
              </div>
            </div>
           <div className="course_box" id="box3">
           <h4>JavaScript Zero to Hero</h4>
           <img src="https://i.ytimg.com/vi/PwsigsH4oXw/maxresdefault.jpg" alt="" id='box_img'/>
           <div className="sub_btn">
                <span className="price">Rs. 199</span> &nbsp; &nbsp;
                <span className="seats">9 seat left</span>
              </div>
           </div>
           <div className="course_box" id="box4">
             <h4>JavaScript Zero to Hero</h4>
             <img src="https://i.ytimg.com/vi/PwsigsH4oXw/maxresdefault.jpg" alt="" id='box_img'/>
             <div className="sub_btn">
                <span className="price">Rs. 199</span> &nbsp; &nbsp;
                <span className="seats">9 seat left</span>
              </div>
           </div>
           <div className="course_box" id="box5">
              <h4>JavaScript Zero to Hero</h4>
               <img src="https://i.ytimg.com/vi/PwsigsH4oXw/maxresdefault.jpg" alt="" id='box_img'/>
               <div className="sub_btn">
               <span className="price">Rs. 199</span> &nbsp; &nbsp;
               <span className="seats">9 seat left</span>
             </div>
           </div>
           <div className="course_box" id="box6">
           <h4>JavaScript Zero to Hero</h4>
           <img src="https://i.ytimg.com/vi/PwsigsH4oXw/maxresdefault.jpg" alt="" id='box_img'/>
           <div className="sub_btn">
               <span className="price">Rs. 199</span> &nbsp; &nbsp;
               <span className="seats">9 seat left</span>
             </div>
           </div>
        
        </div>
    </div>
  )
}

export default Courses