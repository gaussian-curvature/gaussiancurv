import { React } from 'react'
import { Slide } from "react-awesome-reveal";
import Container from 'react-bootstrap/esm/Container'

import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/esm/Card';

import { Mdark, MagicalButton } from './stylee';

  


const Skills = ({ darkMode }) => {
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Slide>
                <Container>
             <br></br>
                    <h4 className="lead" align="center"><b>Past Year Papers and Sample Questions</b></h4>
                    <br></br>
                    <Row>
                      <Col lg={6}>
                     <Card className="skill-nbcard">
            
                                <Card.Body>
                                     <div class={darkMode ? "lead" : "lead"}>MMO 2020 Day 1</div>         
                                    <Card.Text align="left">
                                                   
                                       <a  href="https://aritra-12.github.io/pdfs/MMO%202020%20DAY%201.pdf" > 
                                           {darkMode? <MagicalButton align="left">Download</MagicalButton> : <Mdark  align="left">Download</Mdark>}  
                                          </a>&nbsp;&nbsp; </Card.Text>
 
                                </Card.Body>

                            </Card></Col>
 <Col lg={6}>
                            <Card className="skill-nbcard">
                            
                          
                                <Card.Body >
                                      <div class={darkMode ? "lead" : "lead"}>MMO 2020 Day 2</div>
                                      
                                      <Card.Text align="left">
                                             
  <a href="https://aritra-12.github.io/pdfs/MMO%202020%20DAY%202.pdf" >
                             
       {darkMode? <MagicalButton align="left">Download</MagicalButton> : <Mdark  align="left">Download</Mdark>}

       
                                        </a>&nbsp;&nbsp;</Card.Text>
                                </Card.Body>

                             </Card></Col>  
                    </Row>


                    <br></br>

                </Container>
            </Slide>
        </div>
    )
}

export default Skills
