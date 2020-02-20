import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  Container,
  Button,
  Grid,
  Card,
  Divider,
  Form,
  Input
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import User from "../Assets/Phone.jpeg";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import AirlineSeatFlatAngledIcon from "@material-ui/icons/AirlineSeatFlatAngled";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TwitterIcon from "@material-ui/icons/Twitter";
import PhoneIcon from "@material-ui/icons/Phone";
import Signup from "./CreateUser";
import Signin from "./Signin";

const LandingPage = () => {
  return (
    <Container
      fluid
      style={{
        marginTop: 90,
        textAlign: "Center"
      }}
    >
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none"
          }}
        >
          {/* <Route exact path ="/" component ={logo}/> */}
          <li>Logo</li>
          <li>Home</li>
          <li>About</li>
          <li>History</li>
          <li>Mission</li>
          <li>Contact</li>

          <li>
            <Button inverted color="brown">
              Sign in
            </Button>
          </li>
          <li>
            <Button color="blue" >
              Sign Up
            </Button>
          </li>
        </ul>
      </div>
      <Container
        fluid
        style={{
          backgroundImage: `url(${User})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "15% 0",
          textAlign: "center"
        }}
      >
        <p>
          Have you witnessed or been a victim of an accident? Please report!
        </p>
        <Button color="orange">Report Incident</Button>
      </Container>
      <h3>What you can report</h3>
      <Grid
        column={4}
        centered
        style={{
          padding: 20
        }}
      >
        <Grid.Row>
          <Grid.Column>
            <HomeIcon />
          </Grid.Column>
          <Grid.Column>
            <WhatshotIcon />
          </Grid.Column>
          <Grid.Column>
            <AirlineSeatFlatAngledIcon />
          </Grid.Column>
          <Grid.Column>
            <HomeIcon />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <HomeIcon />
          </Grid.Column>
          <Grid.Column>
            <WhatshotIcon />
          </Grid.Column>
          <Grid.Column>
            <AirlineSeatFlatAngledIcon />
          </Grid.Column>
          <Grid.Column>
            <HomeIcon />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Container
        fluid
        style={{
          backgroundColor: "#eee",
          padding: 20
        }}
      >
        <h2>
          <strong>How it works</strong>
        </h2>
        <p>Download the App and Sign Up on our Page</p>
        <Card.Group
          raised
          itemsPerRow={3}
          stackable
          style={{
            padding: 40
          }}
        >
          <Card
            style={{
              padding: 50
            }}
          >
            <h3>Report an Incident</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
            </p>
          </Card>
          <Card
            style={{
              padding: 50
            }}
          >
            <h3>Authorities are contacted</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
            </p>
          </Card>
          <Card
            style={{
              padding: 50
            }}
          >
            <h3>Officials are dispached</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
            </p>
          </Card>
        </Card.Group>
      </Container>
      <Container
        fluid
        style={{
          padding: 60
        }}
      >
        <h2>How your information helps</h2>
        <Card.Group
          centered
          style={{
            color: "white",
            padding: 16
          }}
        >
          <Card
            style={{
              backgroundColor: "orange",
              padding: 8
            }}
          >
            <p>More than</p>
            <h4>50,000</h4>
            <p>arrests made</p>
          </Card>
          <Card
            style={{
              backgroundColor: "orange",
              padding: 8
            }}
          >
            <p>On an average</p>
            <h4>5</h4>
            <p>people are arrested daily</p>
          </Card>
          <Card
            style={{
              backgroundColor: "orange",
              padding: 8
            }}
          >
            <p>Saved</p>
            <h4>1000+</h4>
            <p>lives and properties</p>
          </Card>
        </Card.Group>
        <Divider />
        <h2>
          <strong>What our users are saying</strong>
        </h2>
      </Container>
      <Container
        fluid
        style={{
          backgroundColor: "#eee",
          padding: 20,
          display: "flex"
        }}
      >
        <HomeIcon />
        <Form centered>
          <Form.Field inline>
            <label>Latest News</label>
            <Input />
            <Button color="blue">Subscribe</Button>
          </Form.Field>
        </Form>
      </Container>
      <Container
        fluid
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: 10
        }}
      >
        <Grid>
          <Grid.Row columns={4}>
            <Grid.Column>
              <h2>About Crest</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </p>
            </Grid.Column>
            <Grid.Column>
              <h2>Useful Links</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </p>
            </Grid.Column>
            <Grid.Column>
              <h2>Get in Touch</h2>
              <p>
                <LocationOnIcon />
                <span>Lorem ipsum dolor</span>
              </p>
              <p>
                <MailOutlineIcon />
                <span>Lorem ipsum dolor</span>
              </p>
              <p>
                <PhoneIcon />
                <span>+2347039635385</span>
              </p>
            </Grid.Column>
            <Grid.Column>
              <h2>Latest Tweets</h2>
              <TwitterIcon />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Container>
  );
};
export default LandingPage;
