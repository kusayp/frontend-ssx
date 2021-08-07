import React, { useState } from "react";
// react-bootstrap components
import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  Form,
  FormControl,
  OverlayTrigger,
  Tooltip,
  InputGroup,
  Modal,
} from "react-bootstrap";
import ChartistGraph from "react-chartist";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      MTN Ghana Stocks
    </Tooltip>
  );

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                {/* <Card.Title as="h4">Users Behavior</Card.Title> */}
                {/* <p className="card-category">24 Hours performance</p> */}
                <Form>
                  <Row>
                    <Col xs={5}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                          <i className="fas fa-search"></i>
                        </InputGroup.Text>
                        <FormControl
                          placeholder="Search.."
                          aria-label="Search"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <div className="float-end">
                        <Button
                          variant="primary"
                          className="btn btn-primary
                    "
                        >
                          <i className="fas fa-plus-square"></i>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Card.Header>
              <Card.Body>
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">SN</th>
                      <th className="border-0">Symbol</th>
                      <th className="border-0">Exchange</th>
                      <th className="border-0">Currency</th>
                      <th className="border-0">Prev. price</th>
                      <th className="border-0">Last price</th>
                      <th className="border-0">Bid</th>
                      <th className="border-0">Ask</th>
                      <th className="border-0">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                      >
                        <td>TBL</td>
                      </OverlayTrigger>

                      <td>REG</td>
                      <td>GHC</td>
                      <td>56.6</td>
                      <td>57</td>
                      <td>85</td>
                      <td>83</td>
                      <td>
                        <button
                          type="button"
                          onClick={handleShow}
                          className="btn btn-warning btn-sm"
                        >
                          <i className="fas fa-eye"></i>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-warning btn-sm"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
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
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Price history of stock</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Mony",
                        "Tue",
                        "Wed",
                        "Thur",
                        "Fri",
                        "Sat",
                        "Sun",
                      ],
                      series: [
                        [1.23, 1.4, 3.85, 1.1, 4.6, 3.74, 2.96],
                        // [67, 152, 143, 240, 287, 335, 435, 437],
                        // [23, 113, 67, 108, 190, 239, 307, 308],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 5,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 70,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MTN Ghana stock (MTNGS)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <Col md="12">
                <Table className="table-hover">
                  <tbody>
                    <tr>
                      <td>Previous Closing Price</td>
                      <td>12.3</td>
                    </tr>
                    <tr>
                      <td>Last Price</td>
                      <td>5.2</td>
                    </tr>
                    <tr>
                      <td>Last Quantity</td>
                      <td>10000</td>
                    </tr>
                    <tr>
                      <td>Change on Day</td>
                      <td>5%</td>
                    </tr>
                    <tr>
                      <td>Volume on Day</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>Best Bid</td>
                      <td>14.8</td>
                    </tr>
                    <tr>
                      <td>Best Ask</td>
                      <td>18.2</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="secondary" onClick={handleClose}>
            Sell
          </Button>
          <div className="float-end">
            <Button size="sm" variant="primary" onClick={handleClose}>
              Buy
            </Button>
          </div>
          {/* <hr></hr> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Dashboard;
