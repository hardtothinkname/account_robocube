import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import { useState } from 'react';
import NavBar from './NavBar';
import SideBar from './Sidebar';
import Dashboard from './Pages/Dashboard';
import Billing from './Pages/Billing';
import AutoPayment from './Pages/AutoPayment';
import Profile from './Pages/Profile';
import PageNotFound from './Pages/PageNotFound';

const style = {
  wrapper: {
    marginTop: "52px",
    minHeight: "100vh",
    // display: "flex",
    // flexDirection: "column"
  }
}

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSidebar1, setShowSidebar1] = useState(false);

  const handleSideBar = (event) => {
    console.log("!@#!@#!@")
    setShowSidebar(!showSidebar)
  }
  return (
    <Container fluid>
      <NavBar handleSideBar={handleSideBar}/>
      <Row>
        <div>
          {
            showSidebar && <SideBar />  
          }
        </div>
        <Col>
          <div style={style.wrapper}>

            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/page/licenses" element={<Dashboard />}></Route>
              <Route path="/page/billing" element={<Billing />}></Route>
              <Route path="/page/auto_payment" element={<AutoPayment />}></Route>
              <Route path="/page/profile" element={<Profile />}></Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>

            {/* <CopyRightFooter /> */}
          </div>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
