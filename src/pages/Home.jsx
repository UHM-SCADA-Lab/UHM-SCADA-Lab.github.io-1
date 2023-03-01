import React from 'react';
import { Carousel, Col, Container, Row, Table } from 'react-bootstrap';

const Home = () => (
  <Container className="py-3">
    <h1 className="text-center py-3">WELCOME TO SCADA LAB</h1>
    <Row className="justify-content-center">
      <Col lg={7}>
        <Carousel id="ImageCarousel">
          <Carousel.Item>
            <img src="/images/Carousel_1.jpeg" alt="Carousel 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/Carousel_2.jpeg" alt="Carousel 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/Carousel_3.jpeg" alt="Carousel 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/Carousel_4.jpeg" alt="Carousel 4" />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Row className="justify-content-center pt-5">
      <Col lg={10}>
        <h1 className="text-center">About the SCADA Lab</h1>
        <p>
          We are going to stand up a small, remote SCADA system. Students will familiarize themselves with the equipment, design & build the lab, then analyze and identify critical cyber terrain. Based on this analysis, students will deploy sensors on the remote network to flow data to a signature-based IDS (Intrusion Detection System). As a class, we will then use AI/ML techniques to automatically create both permissive and restrictive signatures on the remote SCADA network. A second goal of this lab is to explore tools, techniques and procedures for administering legacy SCADA equipment using Zero-Trust processes.
        </p>
      </Col>
    </Row>
    <Row className="justify-content-center pt-5">
      <Col lg={10}>
        <h1 className="text-center">Department Roles</h1>
        <h3>Operations</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th width="30%">Department</th>
              <th>Role Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><a href="/">Network</a></th>
              <td>Configure the network, maintain network equipment</td>
            </tr>
            <tr>
              <th><a href="/">System Admin</a></th>
              <td>Program and maintain Raspberry Pis</td>
            </tr>
            <tr>
              <th><a href="/">Knowledge Management</a></th>
              <td>Maintain the website, write procedures for lab members</td>
            </tr>
            <tr>
              <th><a href="/">SNMP/NOC</a></th>
              <td>Under Construction</td>
            </tr>
            <tr>
              <th><a href="/">sFlow & SDN</a></th>
              <td>Under Construction</td>
            </tr>
          </tbody>
        </Table>
        <h3 className="pt-3">Research</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th width="30%">Department</th>
              <th>Role Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><a href="/">ML Curriculum</a></th>
              <td>Research and implement a machine learning algorithm to make risk-based decision for the SDN controller.</td>
            </tr>
            <tr>
              <th><a href="/">HCI</a></th>
              <td>Under Construction</td>
            </tr>
            <tr>
              <th><a href="/">Database</a></th>
              <td>Under Construction</td>
            </tr>
            <tr>
              <th><a href="/">Red Team/SEL</a></th>
              <td>Research and operate SEL switching devices, connect and exchange communication within SEL devices</td>
            </tr>
            <tr>
              <th><a href="/">Log Stash</a></th>
              <td>Under Construction</td>
            </tr>
          </tbody>
        </Table>
        <h3 className="pt-3">Previous Departments</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th width="30%">Department</th>
              <th>Role Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><a href="/">Radio Frequency</a></th>
              <td>Establish and maintain RF communication between buildings</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

export default Home;
