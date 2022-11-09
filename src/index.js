import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Hi() {
  return <div>
    <div class="left-container">
      <img src="https://avatars.githubusercontent.com/u/108999697?v=4" alt="" width="30%" />
      <h1 class="name">AISHA HANIF</h1>
      <p class="dev"><b>WEBSITE DEVELOPER</b></p>
   
    <div class="right-container">
      <div class="about">
      <h1 class="my">MY RESUME</h1>
        <h1>ABOUT ME</h1>

        <h1 class="skills">SKILLS :</h1>
        <p>* HTML</p>
        <p>* CSS</p>
        <p>* JAVASCRIPT (JS)</p>
        <p>* REPONSIVENESS</p>
        <p>* BOOTSTRAP  </p>
        <h1 class="working">CURRENTLY LEARNING :</h1>
        <p>* NODE.JS</p>
        <p>* EXPRESS.JS</p>
        <p>* REACT.JS</p>
        <p>* DATABASE</p>
      </div>
      <div>
        <h1 class="personal">PERSONAL DETAILS :</h1>
        <p class="email"><b>EMAIL :</b></p>
        <p>aishahanif.csse@gmail.com</p>
        <p class="contact"><b>CONTACT :</b></p>
        <p>0342-3550092</p>
        <p class="nation"><b>NATIONALITY:</b></p>
        <p>Pakistani</p>
        <p class="add"><b>ADDRESS:</b></p>
        <p>B/44 Shahnawaz Bhutto Colony, KARACHI</p>
      </div>

      <div>
        <h1 class="education">EDUCATION:</h1>
        <p class="matric"><b>MATRICULATION (BIO-SCINCE) :</b></p>
        <p>From Board Of Secondary Education, KARACHI..</p>
        <p class="higher"><b>INTERMEDIATE (PRE-MEDICAL):</b></p>
        <p>From Board Of Higher Education, KARACHI..</p>
      </div>
    
        <h1 class="work">MY WORK :</h1>
        <p>Check out my all work.. here is my GITHUB link..</p><br/>
        <p><a href="https://github.com/DevAishaHanif" class="end">Check this link</a></p>
   
    </div>
    </div>
  </div>
}
ReactDOM.render(<Hi />, document.querySelector("#root"));






