import React from 'react';
import {Container, Button, Grid, Card, Divider, Form, Input } from 'semantic-ui-react';
import User from '../Assets/Phone.jpeg';
import Header from './Header';
import { Link } from 'react-router-dom';
import { Accident, Crime, BurningHome, FloodedHouse, Rape, Vandalism, Thief1, Log } from '../Assets/all-icons';
import '../Pages/App.css'

const LandingPage = () => {
    return(
        <div>
            <Header />
            <Container fluid style={{
                marginTop: 68,
                textAlign: 'Center',
            }}>
                
                <Container fluid style={{
                    backgroundImage: `url(${User})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: '15% 0',
                    textAlign: 'center',
                    color: 'white'
                }}>
                    <h3>Have you witnessed or been a victim of an accident? <br />Please report!</h3>
                    <Link to='/userdashboard/report'><Button color='orange'>Report Incident</Button></Link>
                </Container>
                <h3>What you can report</h3>
                <div className='ui four column grid' id='icon-container'>
                    <div className='row'>
                        <div className='column'>
                            <Accident className='icon1' />
                            <p>Car Accidents</p>
                        </div>
                        <div className='column'>
                            <BurningHome className='icon1' />
                            <p>Fire Outbreaks</p>
                        </div>
                        <div className='column'>
                            <FloodedHouse className='icon1'/>
                            <p>Floods</p>
                        </div>
                        <div className='column'>
                            <Crime className='icon1'/>
                            <p>Homicides</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='column'>
                            <Log className='icon1'/>
                            <p>Assault</p>
                        </div>
                        <div className='column'>
                            <Vandalism className='icon1'/>
                            <p>Vandalism</p>
                        </div>
                        <div className='column'>
                            <Thief1 className='icon1'/>
                            <p>Theft</p>
                        </div>
                        <div className='column'>
                            <Rape className='icon1'/>
                            <p>Rape</p>
                        </div>
                    </div>
                </div>
                <Container fluid style={{
                    backgroundColor: '#eee',
                    padding: 20
                }}>
                    <h2><strong>How it works</strong></h2>
                    <p>Download the App and Sign Up on our Page</p>
                    <Card.Group raised itemsPerRow={3} stackable
                        style={{
                            padding: 40
                        }}>

                        <Card
                            style={{
                                padding: 50,
                                
                            }}
                        >
                            <h3>Report an Incident</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis
                        </p>
                        </Card>
                        <Card
                            style={{
                                padding: 50
                            }}
                        >
                            <h3>Authorities are contacted</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis
                            </p>
                        </Card>
                        <Card
                            style={{
                                padding: 50
                            }}
                        >
                            <h3>Officials are dispached</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis
                            </p>
                        </Card>
                    </Card.Group>
                </Container>
                <Container fluid
                    style={{
                        padding: 60
                    }}>
                    <h2>How your information helps</h2>
                    <Card.Group centered
                        style={{
                            color: 'white',
                            padding: 20
                        }}>
                        <Card style={{
                            backgroundColor: '#c51',
                            padding: 30
                        }}>
                            <p>More than</p>
                            <h2>50,000</h2>
                            <p>arrests made</p>
                        </Card>
                        <Card style={{
                            backgroundColor: '#c51',
                            padding: 8
                        }}>
                            <p>On an average</p>
                            <h2>5</h2>
                            <p>people are arrested daily</p>
                        </Card>
                        <Card style={{
                            backgroundColor: '#c51',
                            padding: 8
                        }}>
                            <p>Saved</p>
                            <h2>1000+</h2>
                            <p>lives and properties</p>
                        </Card>
                    </Card.Group>
                    <Divider />
                    <h2><strong>What our users are saying</strong></h2>
                </Container>
                <Container fluid
                    style={{
                        backgroundColor: '#eee',
                        padding: 20,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                    <i aria-hidden='true' className='home link icon'/>
                    <Form>
                        <Form.Field inline>
                            <label>Latest News</label>
                            <Input style={{ margin: '0 8px' }} />
                            <Button color='orange'>Subscribe</Button>
                        </Form.Field>
                    </Form>
                </Container>
                <Container fluid style={{
                    backgroundColor: '#444',
                    color: 'white',
                    padding: 10,
                    textAlign: 'justify',
                }}>
                    <Grid>
                        <Grid.Row columns={4} style={{margin: 10}}>
                            <Grid.Column>
                                <h2>About Crest</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                </p>
                            </Grid.Column>
                            <Grid.Column>
                                <h2>Useful Links</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                </p>
                            </Grid.Column>
                            <Grid.Column>
                                <h2>Get in Touch</h2>
                                <p>
                                    <i aria-hidden='true' className='map marker alternate link icon' />
                                    <span>Lorem ipsum dolor minim veniam ipsum</span>
                                </p>
                                <p>
                                    <i aria-hidden='true' className='mail outlined link icon' />
                                    <span>Lorem ipsum dolor minim veniam ipsum</span>
                                </p>
                                <p>
                                    <i aria-hidden='true' className='phone link icon' />
                                    <span>+2347039635385</span>
                                </p>
                                <p>
                                    <i aria-hidden='true' className='clock link icon' />
                                    <span>24 hrs ipsum dolor minim veniam ipsum </span>
                                </p>
                            </Grid.Column>
                            <Grid.Column>
                                <h2>Latest Tweets</h2>
                                <p>
                                    <i aria-hidden='true' className='twitter square icon' />
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                </span>
                                </p>
                                
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Container>
        </div>
        
    )
};
export default LandingPage;