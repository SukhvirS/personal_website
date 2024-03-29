import React from 'react';

import MyNavbar from './components/MyNavbar'
// import profileImage from './resources/images/profileImage3.jpg';
import storage from 'local-storage-fallback';
// import email_dark from './resources/images/email_dark.png';
// import email_light from './resources/images/email_light.png';
// import github_dark from './resources/images/github_dark.png';
// import github_light from './resources/images/github_light.png';
// import linkedin_dark from './resources/images/linkedin_dark.png';
// import linkedin_light from './resources/images/linkedin_light.png';
import './Overview.css';
import RedLogo from './components/RedLogo';
import BlueLogo from './components/BlueLogo';

import TypeIt from "typeit-react";


class Overview extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.getInitialTheme = this.getInitialTheme.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  getInitialTheme(){
    const savedTheme = storage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : {mode:'light'}
  }

  render(){
    const theme = this.getInitialTheme();

    return(
      <div style={{fontFamily:"Circular"}} className='Overview_page'>
        <MyNavbar />
        {
          this.state.width < 750 ?
          <div style={{paddingLeft:"2.7em", paddingRight:"3.5em", marginTop:"100px"}}>
            <div style={{width:"100%", paddingBottom:"1em", marginTop:"15vh"}}>
              <p style={{fontSize:'calc(3.563vw + 20px)', marginBottom:"-0.5em"}}>
                Sukhvir Singh
              </p>
              {/* <p style={{fontSize:"calc(5.563vw + 20px)", marginBottom:'-20px'}}>
                SINGH
              </p> */}
            </div>
            {/* <div>
              <p style={{fontSize:"5vw", color:'grey'}}>sukhvir23singh@gmail.com</p>
            </div> */}

            <hr style={{borderTop:'1px solid #d4d4d4'}}/>

            {/* <p style={{fontSize:"5vw", color:"gray"}}>
              I'm a <span style={{color: theme.mode === 'light' ? 'black' : '#eeeeee'}}>software engineer</span> experienced in building full-stack machine learning applications using big data. I'm proficient in every step of the <span style={{color: theme.mode === 'light' ? 'black' : '#eeeeee'}}>machine learning</span> pipeline, from data collection and preprocessing to model deployment and maintenance.
            </p> */}
            <div style={{color:'grey'}}>
              <p>Hi,</p>
                  <p>
                    <span>I'm a </span>
                    <span id='first_placeholder'>_</span>

                    <span style={{color: theme.mode === 'light' ? 'black' : '#eeeeee'}}> 
                      <TypeIt
                        getBeforeInit={(instance) => {
                          instance.type("").pause(800).exec(() => {document.getElementById('first_placeholder').style.display = 'none'}).type("software engineer");
                          return instance;
                        }}
                        options={{
                          speed: 40,
                          cursor: false,
                        }}
                        />
                    </span>
                    
                    <span> experienced in building full-stack web applications from scratch. I'm a </span>
                    <span id='second_placeholder'>_</span>

                    <span style={{color: theme.mode === 'light' ? 'black' : '#eeeeee'}}> 
                      <TypeIt
                        getBeforeInit={(instance) => {
                          instance.type("").pause(2000).exec(() => {document.getElementById('second_placeholder').style.display = 'none'}).type("data scientist");
                          return instance;
                        }}
                        options={{
                          cursor: false,
                          speed: 40
                        }}/>
                    </span>

                    <span> capable of extracting actionable insights from big data. And I'm a </span>

                    <span id='third_placeholder'>_</span>

                    <span style={{color: theme.mode === 'light' ? 'black' : '#eeeeee'}}>
                      <TypeIt
                        getBeforeInit={(instance) => {
                          instance.type("").pause(3200).exec(() => {document.getElementById('third_placeholder').style.display = 'none'}).type("machine learning engineer");
                          return instance;
                        }}
                        options={{
                          cursor: false,
                          speed: 40
                        }}/>
                    </span>
                    
                    <span> adept at the full machine pipeline, from data collection and preprocessing to model deployment and maintenance.
                    </span>
                  </p>

                  <p>More about me:</p>
                </div>

              {
                theme.mode == 'dark'?
                <div>
                  
                  <a href="mailto:sukhvir23singh@gmail.com">
                    <div id='email_btn_dark' style={{width:'100%', margin:'6px 0'}}>
                        <span id='email_label_dark'>Email</span>
                        <span id='email_reveal_dark'>Email</span>
                        <div id='email_image_dark'></div>                      
                    </div>
                  </a>

                  <a href='https://www.linkedin.com/in/sukhvir-singh-62ba48121/' target='_blank' rel="noopener noreferrer">
                    <div id='linkedin_btn_dark' style={{width:'100%', margin:'0 0 6px 0'}}>
                      <span id='linkedin_label_dark'>LinkedIn</span>
                      <span id='linkedin_reveal_dark'>LinkedIn</span>
                      <div id='linkedin_image_dark' />
                    </div>
                  </a>

                  <a href='https://github.com/SukhvirS' target='_blank' rel="noopener noreferrer">
                    <div id='github_btn_dark' style={{width:'100%', margin:'0 0 20px 0'}}>
                        <span id='github_label_dark'>GitHub</span>
                        <span id='github_reveal_dark'>GitHub</span>
                        <div id='github_image_dark' />
                      </div>
                  </a>

                </div>
                :
                <div>
                  <a href="mailto:sukhvir23singh@gmail.com">
                    <div id='email_btn' style={{width: '100%', margin:'6px 0'}}>
                        <span id='email_label'>Email</span>
                        <span id='email_reveal'>Email</span>
                        <div id='email_image'></div>                      
                    </div>
                  </a>

                  <a href='https://www.linkedin.com/in/sukhvir-singh-62ba48121/' target='_blank' rel="noopener noreferrer" >
                    <div id='linkedin_btn' style={{width: '100%', margin:'0 0 6px 0'}}>
                      <span id='linkedin_label'>LinkedIn</span>
                      <span id='linkedin_reveal'>LinkedIn</span>
                      <div id='linkedin_image' />
                    </div>
                  </a>

                  <a href='https://github.com/SukhvirS' target='_blank' rel="noopener noreferrer">
                    <div id='github_btn' style={{width: '100%', margin:'0 0 20px 0'}}>
                        <span id='github_label'>GitHub</span>
                        <span id='github_reveal'>GitHub</span>
                        <div id='github_image' />                        
                      </div>
                  </a>
                </div>
              }

          </div>
          :
          <div>
            <div style={{margin:'0 12vw'}}>

              <div style={{fontSize:"32px", color:"grey", padding:'0 0 0 2px'}}>

                <p>Hi,</p>
                <p>
                  <span>I'm a </span>
                  <span id='first_placeholder'>_</span>

                  <span style={{color: theme.mode === 'light' ? 'black' : '#eeeeee'}}> 
                    <TypeIt
                      getBeforeInit={(instance) => {
                        instance.type("").pause(800).exec(() => {document.getElementById('first_placeholder').style.display = 'none'}).type("software engineer");
                        return instance;
                      }}
                      options={{
                        speed: 40,
                        cursor: false,
                      }}
                      />
                  </span>
                  
                  <span> experienced in building full-stack web applications from scratch. I'm a </span>
                  <span id='second_placeholder'>_</span>

                  <span style={{color: theme.mode === 'light' ? 'black' : '#eeeeee'}}> 
                    <TypeIt
                      getBeforeInit={(instance) => {
                        instance.type("").pause(2000).exec(() => {document.getElementById('second_placeholder').style.display = 'none'}).type("data scientist");
                        return instance;
                      }}
                      options={{
                        cursor: false,
                        speed: 40
                      }}/>
                  </span>

                  <span> capable of extracting actionable insights from big data. And I'm a </span>

                  <span id='third_placeholder'>_</span>

                  <span style={{color: theme.mode === 'light' ? 'black' : '#eeeeee'}}>
                    <TypeIt
                      getBeforeInit={(instance) => {
                        instance.type("").pause(3200).exec(() => {document.getElementById('third_placeholder').style.display = 'none'}).type("machine learning engineer");
                        return instance;
                      }}
                      options={{
                        cursor: false,
                        speed: 40
                      }}/>
                  </span>
                  
                  <span> adept at the full machine pipeline, from data collection and preprocessing to model deployment and maintenance.
                  </span>
                </p>

                <p>More about me:</p>
                
              
              </div>

              {
                theme.mode == 'dark'?
                <div>
                  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    
                    <a href="mailto:sukhvir23singh@gmail.com">
                      <div id='email_btn_dark'>
                          <span id='email_label_dark'>Email</span>
                          <span id='email_reveal_dark'>sukhvir23singh@gmail.com</span>
                          <div id='email_image_dark'></div>                      
                      </div>
                    </a>

                    <a href='https://www.linkedin.com/in/sukhvir-singh-62ba48121/' target='_blank' rel="noopener noreferrer" style={{margin:'0 10px'}}>
                      <div id='linkedin_btn_dark'>
                        <span id='linkedin_label_dark'>LinkedIn</span>
                        <span id='linkedin_reveal_dark'>Sukhvir Singh</span>
                        <div id='linkedin_image_dark' />
                      </div>
                    </a>


                    <a href='https://github.com/SukhvirS' target='_blank' rel="noopener noreferrer">
                      <div id='github_btn_dark'>
                          <span id='github_label_dark'>GitHub</span>
                          <span id='github_reveal_dark'>SukhvirS</span>
                          <div id='github_image_dark' />
                        </div>
                    </a>
                  </div>

                  <BlueLogo />

                </div>
                :
                <div>
                  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginRight:'0'}}>

                    <a href="mailto:sukhvir23singh@gmail.com">
                      <div id='email_btn'>
                          <span id='email_label'>Email</span>
                          <span id='email_reveal'>sukhvir23singh@gmail.com</span>
                          <div id='email_image'></div>                      
                      </div>
                    </a>

                    <a href='https://www.linkedin.com/in/sukhvir-singh-62ba48121/' target='_blank' rel="noopener noreferrer" >
                      <div id='linkedin_btn'>
                        <span id='linkedin_label'>LinkedIn</span>
                        <span id='linkedin_reveal'>Sukhvir Singh</span>
                        <div id='linkedin_image' />
                      </div>
                    </a>

                    <a href='https://github.com/SukhvirS' target='_blank' rel="noopener noreferrer">
                      <div id='github_btn'>
                          <span id='github_label'>GitHub</span>
                          <span id='github_reveal'>SukhvirS</span>
                          <div id='github_image' />                        
                        </div>
                    </a>
                  </div>

                  <RedLogo />

                </div>
              }

              <br/>
              <br/>
              {/* <p id='thanks' style={{fontSize:"32px", color: theme.mode === 'light' ? 'black' : '#eeeeee', padding:'0 0 0 2px'}}></p> */}
            </div>
          </div>
        }

      </div>
    )
  }
}


export default Overview
