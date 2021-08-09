import { 
    Card,
    Container,
    Row,
    Col,
    } from "react-bootstrap";

function HeadlinePage(params) {
    return (
        <Container>
             <Col md="12">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h5">Market headlines</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col xs="6">
                    <div className="numbers float-start">
                      <Card.Title as="h5">MTNGS</Card.Title>
                      <p className="card-category">MTN Ghana Stock</p>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div className="numbers float-end">
                      <Card.Title as="h5">$ 1,345</Card.Title>
                      <p className="card-category">
                        <span>
                          <i className="fas fa-caret-up mr-1"></i>
                        </span>
                        0.235
                      </p>
                    </div>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col xs="6">
                    <div className="numbers float-start">
                      <Card.Title as="h5">MTNGS</Card.Title>
                      <p className="card-category">MTN Ghana Stock</p>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div className="numbers float-end">
                      <Card.Title as="h5">$ 1,345</Card.Title>
                      <p className="card-category">
                        <span>
                          <i className="fas fa-caret-up mr-1"></i>
                        </span>
                        0.235
                      </p>
                    </div>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col xs="6">
                    <div className="numbers float-start">
                      <Card.Title as="h5">MTNGS</Card.Title>
                      <p className="card-category">MTN Ghana Stock</p>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div className="numbers float-end">
                      <Card.Title as="h5">$ 1,345</Card.Title>
                      <p className="card-category">
                        <span>
                          <i className="fas fa-caret-up mr-1"></i>
                        </span>
                        0.235
                      </p>
                    </div>
                  </Col>
                </Row>
                <hr></hr>
              </Card.Body>
            </Card>
          </Col>
        
        </Container>
    )
}

export default HeadlinePage;