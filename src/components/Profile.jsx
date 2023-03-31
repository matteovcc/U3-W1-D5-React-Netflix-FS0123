import { Button, Col, Container, Dropdown, DropdownButton, Form, Image, Row } from 'react-bootstrap';
import avatar from "../assets/avatar.png"

const Profile = () => (
    <Container>
      <Row className="border-bottom border-secondary py-4">
        <Col xs={12} className="text-white border-bottom border-secondary">
          <h1 className="text-start">Edit Profile</h1>
        </Col>
        <Col xs={4} className="p-2">
          <Image src={avatar} fluid alt="" />
        </Col>
        <Col xs={8} className="p-2">
          <div className="bg-secondary">
            <p className="text-white p-1 ms-1">Strive Student</p>
          </div>
          <p className="text-light fw-semibold">Language:</p>
          <DropdownButton title="English" variant="dark-emphasis" className="border px-3 py-1">
            <Dropdown.Item href="#">Italian</Dropdown.Item>
            <Dropdown.Item href="#">Francais</Dropdown.Item>
            <Dropdown.Item href="#">Espanol</Dropdown.Item>
          </DropdownButton>
          <hr className="text-secondary" />
          <p className="text-light fw-semibold">Maturity Settings:</p>
          <Button variant="secondary" className="text-white mb-3">ALL MATURITY RATINGS</Button>
          <p className="text-white">Show titles of <span className="fw-semibold">all maturity ratings</span> this profile.</p>
          <Button variant="dark" className="text-light-emphasis py-1 px-3 text-center border-secondary" style={{ letterSpacing: '0.1em' }}>EDIT</Button>
          <hr className="text-secondary" />
          <h2 className="text-light fs-4">Autoplay controls</h2>
          <Form.Check
            type="checkbox"
            className="mt-0 bg-dark border border-1 rounded-0 "
            label={<span className="text-white ms-1">Autoplay next episode in a series on all devices</span>}
            id="profile-checkbox-1"
          />
          <Form.Check
            type="checkbox"
            className="mt-0 bg-dark border border-1 rounded-0"
            label={<span className="text-white ms-1">Autoplay previews while browsing on all devices</span>}

            id="profile-checkbox-2"
          />
        </Col>
      </Row>
      <div className="d-flex justify-content-center my-4">
        <Button variant="light" className="text-dark me-5" style={{ letterSpacing: '0.1em' }}>SAVE</Button>
        <Button variant="dark" className="text-secondary border border-secondary me-5" style={{ letterSpacing: '0.1em' }}>CANCEL</Button>
        <Button variant="dark" className="text-secondary border border-secondary" style={{ letterSpacing: '0.1em' }}>DELETE PROFILE</Button>
      </div>
    </Container>
)
  export default Profile