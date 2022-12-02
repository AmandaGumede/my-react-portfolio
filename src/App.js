import logo from './logo.svg';
import profile from './profile.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
          <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul class="navbar-nav flex-grow-1">
                <li id="About" class="nav-item border-right border-left px-2">
                    <a class="nav-link text-dark active" href="#Home">About</a>
                </li>
                <li class="nav-item border-right px-2" >
                    <a class="nav-link text-dark" href="#Education">Education</a>
                </li>
                <li class="nav-item border-right px-2">
                    <a class="nav-link text-dark" href="#Contact">Contact</a>
                </li>
            </ul>
          </div>
        </nav>
        <div className="row mb-3">
            <div className="col-4 img-rounded">
            <img src={profile} className="App-logo" alt="logo" />
              <h3>Amanda Gumede</h3>
              <h6>
                <i>
                  Aspiring Software Developer
                </i>
              </h6>
            </div>
            <div className="col-7">
              <h4>Brief About My Self</h4>
              <hr></hr>
              <p>
              I am an individual with a passion for tech,I have always been interested in software development,I have a good understanding of html,css,java,javascript,flutter and python.I am currently improving my skills by learning various new technologies.
              I have educational background in software development which im currently studying at Wethinkcode_ where I am doing my final year,I also have unique visioning skills.MY personality and attitude towrads everything is great.
              
              </p>
            </div>
        </div>

        <p>
          My goals for the future is to specialize in a programming language ,also to pursue addiotional education to learn new technologies and langauges, I would also love to adapt to this company and grow and improve my soft skills.
              
        </p>
        <div className="row mb-3">            
            <div className="col-6">
              <h4>Why  Me</h4>
              <hr></hr>
              <p>
              I would love to be a developer at SovTech because I have a passion for designing computer programs and being a dveleoper allows me to use my creative and problem solving skills.
              Being part of the SovTech family would really be an honour to me since this is an amazing leading software and design company in Africa I would be an asset to the company,also grow as an indiviual and gain experience this would be a great start to my career,joining an amazing company that has a wonderful culture which I would definitley fit in.
              I am a person who is always willing to learn new things and uplift the company to upper levels with my new skills everyday.
              </p>
            </div>
            <div className="col-6 border-left">
            <h4>Tech Stack</h4>
            <hr></hr>
              <p>
      
              </p>
              <div className="row">
              <div className="col-4 List">
                <h5>Languages</h5>
                  <ol>
                    <li>
                      Java
                    </li>
                    <li>
                      JavaScript
                    </li>
                    <li>
                      Python
                    </li>
                    <li>
                      HTML & CSS
                    </li>
                  </ol>
              </div>
              <div className="col-8 List">
                <h5>FrameWorks And Technologies</h5>
                  <ol>
                    <li>
                      Javalin
                    </li>
                    <li>
                      HandleBars
                    </li>
                    <li>
                      Thymeleaf
                    </li>
                    <li>
                      Java
                    </li>
                  </ol>
              </div>
              </div>
            </div>
        </div>
        <div id="Education" className="row mb-3">
            <h3>Education</h3>
            <hr></hr>
            <p>
              Information Technology(Systems Development)
            NQF lEVEL 5 
            </p>
        </div>
        
        <div id="Contact" className="row mb-3">
            <h3>Contact Me</h3>
            <hr></hr>
            <p>
            Email: <>amandagumede166@gmail.com</>
            Phone: <>0769713153</>
            </p>
        </div>
      </header>
    </div>
  );
}

export default App;
