import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
    render(){
        return (
            <div>
                <Intro />
            </div>
        );
    }
}

export default Main;

const Intro = () => (
    <div class="container" id="CONTENTS">
        <ul class="collection white z-depth-1">
            <li class="collection-item avatar">
                <i class="material-icons circle indigo">whatshot</i>
                <span class="title"><b>Service Development Helper</b></span>
                <p>서비스 개발 본부원들 위한 도우미! 에베레레레레ㅔ레레</p>
            </li>
        </ul>
        <ul class="collapsible collection white">
            <List />
        </ul>
    </div>
);

const List = () => (
    <li>
        <div className="collapsible-header active">
            <i class="material-icons">language</i>
            <b>팀커 도우미</b>
        </div>
        <div className="center-align">
            <p> 
                팀 커뮤니케이션 일정과 장소를 정하고 해당 날짜에 알림을 줍니다.
                <Link to='/teamcomm' class="secondary-content btn indigo">
                    <i class="material-icons">send</i>
                </Link>
            </p>
        </div>
    </li>
  );