import Tab from 'react-bootstrap/Tab';
import { Row, Col, Nav, Container, } from 'react-bootstrap';
import CreateUser from '../components/CreateUser/CreateUser';
import CreateCategories from '../components/CreateCategories/CreateCategories';
import CreatePost from '../components/CreatePost/CreatePost';
const Home = () => {
    return (
        <div className='my-4'>
            <Container className='border shadow-sm p-2 rounded'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column d-flex justify-content-start">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Create User</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Create Categories</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Create Posts</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <CreateUser />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <CreateCategories />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <CreatePost />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </Container>
        </div>
    )
}

export default Home