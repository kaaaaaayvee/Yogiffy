// import from 'react';
import React, { Component } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import YogaVerticalList from '../data/yoga_verticals';
import TeamMemberList from '../data/teamMemberList';
import YogaInfoList from '../data/YogaInfoList';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const YogaVerticalWidget = () => {
  let yogaVerticalList = YogaVerticalList.map((yogaVertical) => {
    return (
      <li key={yogaVertical.id} >
        <div className='banner_section'>
          <img className="teacher-img" src={yogaVertical.img_src} alt="teacher" />
          <NavLink to={"/services/"+yogaVertical.title}>{yogaVertical.title}</NavLink>
          <p>{yogaVertical.bio}</p>
        </div>
      </li>
    );
  });

  return (
    <div className='yoga_programs'>
      <h2>Find What Moves You</h2>
      <div className='scrollmenu'>
        {yogaVerticalList}
      </div>

    </div>
  );
}



const TeamMembersWidget = () => {
  let teamMemberList = TeamMemberList.map((teamMember) => {
    return (

      <li key={teamMember.id} >
        <div className='banner_section'>
          <img className="team_img" src={teamMember.img_src} alt="teacher" />
          <a>{teamMember.name}</a>
          <p>{teamMember.bio}</p>
          {/* <h3>fdfdfdf</h3> */}
        </div>
      </li>
    );
  });

  return (
    <div className='team_members'>
      <h2>Meet Our Team</h2>
      <div className='scrollmenu'>
        {teamMemberList}
      </div>

    </div>
  );
}


const InfoWidget = () => {
  let infoList = YogaInfoList.map((info) => {
    return (

      <li key={info.id} >
        <div className='info_section'>
          <div className="numberCircle">{info.count}</div>
          {/* <h3 className='numberCircle'>{info.count}</h3> */}
          <a>{info.title}</a>
          <p>{info.bio}</p>

        </div>
      </li>
    );
  });

  return (
    <div className='info_yoga'>
      <h2>Count the ways you can
        personalize your practice</h2>
      <div className='main_info'>
        {infoList}
      </div>
    </div>
  );
}
class Home extends Component {
  handleOnItemClicked = (title) => {
    console.log("#######")
    console.log(title);
    this.setState(prevState => {
      <NavLink></NavLink>
    });

  }
  render() {
    return (
      <div className='container'>

        {/* <div className='banner_section'>
          <img id='home_banner' src='banner_opac.png'></img>
          <h2 id='banner_title'>YOGIFY YOURSELF</h2>


        </div> */}
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000}>
          <div>
            <img id='home_banner' src='banner_opac.png' alt='Banner 1' />
            <h2 id='banner_title'>YOGIFY YOURSELF</h2>
          </div>
          <div>
            <img id='home_banner' src='banner_opac.png' alt='Banner 2' />
            <h2 id='banner_title'>YOGIFY YOURSELF</h2>
          </div>
          <div>
            <img id='home_banner' src='banner_opac.png' alt='Banner 3' />
            <h2 id='banner_title'>YOGIFY YOURSELF</h2>
          </div>
        </Carousel>
        <div className='home_other_section'>
          {/* <Teachers/> */}
          <YogaVerticalWidget
        ></YogaVerticalWidget>
        
          <InfoWidget></InfoWidget>
          <TeamMembersWidget />
        </div>

      </div>



    );
  }
}


export default Home;

// Render the container component to the DOM

// ReactDOM.render(<Home />, document.getElementById('root'));