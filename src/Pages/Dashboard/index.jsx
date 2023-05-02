import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import SideBar from '../Sidebar/index';
import './dashboard.css'
import CopyRightFooter from '../../Components/CopyRightFooter';
// import NavBar from '../NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCalendarAlt, faCaretSquareRight, faChalkboardTeacher, faChartPie, faExternalLinkSquareAlt, faMoneyCheckAlt, faSync, faTimesCircle, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import style from '../../shared/style';

const Dashboard = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(true);

  return (
    <div id="page-content-wrapper">

      <div class="h-min-100"  style={style['h-min-100']}>

        <div class="container-fluid py-2">
          <div class="row">
            <div class="col-6 my-auto">
              <h4 class="py-2 mb-0 font-weight-bold">Licenses</h4>
            </div>
          </div>
        </div>

        <div class="container-fluid h-min-100">
          <div class="row">
            <div class="col-md-9">


              <div class="alert alert-info">
                Welcome to new Robocube portal
              </div>

            </div>
            <div class="col-md-3">

              <ul class="list-group">
                <a href="?sso=tuition-dev" class="list-group-item" target="_blank">
                  Robocube Tuition (Dev)
                  <i class="fas fa-external-link-square float-right mt-1" aria-hidden="true"></i>
                </a>
                <a href="?sso=tuition" class="list-group-item" target="_blank">
                  Robocube Tuition
                  <i class="fas fa-external-link-square float-right mt-1" aria-hidden="true"></i>
                </a>
                <a href="?sso=hr-dev" class="list-group-item" target="_blank">
                  Robocube HR (Dev)
                  <i class="fas fa-external-link-square float-right mt-1" aria-hidden="true"></i>
                </a>
              </ul>

            </div>
          </div>
        </div>

      </div>


      <div class="container-fluid pt-3 border-top">
        2023 © Robocube. All right reserved. Powered by <a href="https://synorexcloud.com/" target="_blank">Synorex</a>
      </div>
    </div>
  );
};

export default Dashboard;