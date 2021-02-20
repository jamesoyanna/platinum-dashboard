import React, { Component } from 'react';
import { Container, Card, CardBody, Row, Col, Table,UncontrolledTooltip, Alert, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
          breadcrumbItems: [
            { title: "Ecommerce", link: "#" },
            { title: "Customers", link: "#" },
          ],
          isAlertOpen: false,
          modal_static: false,
          data: [
            {
              customer: "James Oyanna",
              email: "james@gmail.com",
              phone: "+234-80464-4620",
              balance: "₦ 3,240",
              date: "06 Feb, 2021",
            },
            {
              customer: "Angel Agetu",
              email: "angleme@gmail.com",
              phone: "+234-80248-2690",
              balance: "₦ 2,450",
              date: "05 Feb, 2021",
            },
            {
              customer: "Taiwo Sanda	",
              email: "taiwa.sanda@gmail.com",
              phone: "+234-805819-9286",
              balance: "₦ 1,570",
              date: "10 Feb, 2021",
            },
            {
              customer: "Simaon Oyanna",
              email: "simaon@gmail.com",
              phone: "+234-803742-3333",
              balance: "₦ 2,500",
              date: "03 Feb, 2021",
            },
            {
              customer: "Martha Egbe",
              email: "Marthaeb@gmail.com",
              phone: "+234-80301-330-5745",
              balance: "₦ 3,200",
              date: "03 Feb, 2021",
            },
            {
              customer: "Kehinde Temitope",
              email: "temitope@gmail.com",
              phone: "+234-803453-5725",
              balance: "₦ 4,000",
              date: "14 , 2020",
            },
            {
              customer: "Robert John",
              email: "Robertjohn.com",
              phone: "+234-80237-9899",
              balance: "₦ 3,600",
              date: "21 Jan, 2021",
            },
            {
              customer: "Mary McDonald",
              email: "Marymac@gmail.com",
              phone: "+2343-8051-25554",
              balance: "₦ 3,500",
              date: "09 Feb, 2021",
            },
            {
              customer: "Keith Lawal",
              email: "Keithlawal@gmail.com	",
              phone: "+234-80712-1810",
              balance: "₦ 1,450",
              date: "12 Feb, 2021",
            },
            {
              customer: "Anthony Ojo",
              email: "Anthonojo@yahoo.com",
              phone: "+234-80371-8864",
              balance: "₦ 5,100",
              date: "17 Feb, 2021",
            },
            {
              customer: "Donnald Esho",
              email: "donaldesho@gmail.com",
              phone: "+234-80583-5779",
              balance: "₦ 3,450",
              date: "05 Feb, 2021",
            },
            {
              customer: "Angie Shana",
              email: "Angieshana@yahoo.com",
              phone: "+234-803494-4527",
              balance: "₦ 1,100",
              date: "30 Jan, 2021",
            },
          ],
        };
        this.addCustomer.bind(this);
    }

    addCustomer = (event, values) => {
        //Assign values to the variables
        var name = values.custname;
        var cEmail = values.custemail;
        var phonenumber = values.phonenumber;
        var newBalance ="$ "+ values.wBalance;
        var d = new Date();
        var day = d.getDate();
        var mon = d.getMonth();
        var y = d.getFullYear();
        var date = day + "/" + mon + "/" + y;
        let demoData = this.state.data;

        //push data to the varible
        demoData.push({ customer :name, email : cEmail, phone : phonenumber, balance : newBalance, date : date })
        
        //update data state
        this.setState({data : demoData});

        //show alert for success message
        this.setState({isAlertOpen : true});

        //update state for closing
        setTimeout(() => { 
            this.setState({modal_static : false});
        }, 2000);
    }
    
    render() {
        return (
            <React.Fragment>
                <div  className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Customers" breadcrumbItems={this.state.breadcrumbItems} />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>
                                        <div>
                                            <Link to="#" onClick={() => this.setState({ modal_static: true, isAlertOpen : false })} className="btn btn-success mb-2"><i  className="mdi mdi-plus mr-2"></i> Add Customer</Link>
                                        </div>
                                        <div  className="table-responsive mt-3">
                                            <Table className="table-centered datatable dt-responsive nowrap " style={{borderCollapse:"collapse", borderSpacing : 0, width:"100%"}}>
                                                <thead  className="thead-light">
                                                    <tr>
                                                        <th style={{width:"20px"}}>
                                                            <div  className="custom-control custom-checkbox">
                                                                <Input type="checkbox"  className="custom-control-input" id="customercheck"/>
                                                                <Label  className="custom-control-label" htmlFor="customercheck">&nbsp;</Label>
                                                            </div>
                                                        </th>
                                                        <th>Customer</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                        <th>Wallet Balance</th>
                                                        <th>Joining Date</th>
                                                        <th style={{width:"120px"}}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.data.map((customerData, key) =>
                                                            <tr key={key}>
                                                                <td>
                                                                    <div  className="custom-control custom-checkbox">
                                                                        <Input type="checkbox"  className="custom-control-input" id={"customercheck" + key}/>
                                                                        <Label  className="custom-control-label" htmlFor={"customercheck" + key}>&nbsp;</Label>
                                                                    </div>
                                                                </td>
                                                                
                                                                <td>{customerData.customer}</td>
                                                                <td>{customerData.email}</td>
                                                                <td>{customerData.phone}</td>
                                                                
                                                                <td>
                                                                   {customerData.balance}
                                                                </td>
                                                                <td>
                                                                   {customerData.date}
                                                                </td>
                                                                <td>
                                                                <Link to="#"  className="mr-3 text-primary" id={"edit"+key}><i  className="mdi mdi-pencil font-size-18"></i></Link>
                                                                    <UncontrolledTooltip target={"edit"+key} placement="top">
                                                                        Edit
                                                                    </UncontrolledTooltip>
                                                                    <Link to="#"  className="text-danger" id={"delete"+key}><i className="mdi mdi-trash-can font-size-18"></i></Link>
                                                                    <UncontrolledTooltip target={"delete"+key} placement="top">
                                                                        Delete
                                                                    </UncontrolledTooltip>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </Table>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Modal
                          isOpen={this.state.modal_static}
                          toggle={this.tog_static}
                          backdrop="static"
                          centered
                          size = "lg"
                        >
                            <ModalHeader toggle={() => this.setState({ modal_static: false })}>
                            Add Customer Details
                            </ModalHeader>
                            <ModalBody>
                            <AvForm onValidSubmit={this.addCustomer}>
                                <Row>
                                    <Col lg={12}>
                                    <Alert color="success" isOpen={this.state.isAlertOpen} toggle={ () => this.setState({isAlertOpen : false}) }>
                                        Data Added Successfully...!
                                    </Alert>
                                    <FormGroup>
                                        <Label htmlFor="name">Customer Name</Label>
                                        <AvField
                                            name="custname"
                                            type="text"
                                            className="form-control"
                                            id="custname"
                                            placeholder="Enter Customer Name"
                                            required
                                        />
                                    </FormGroup>
                                    </Col>
                                </Row>

                                    <Row>
                                        <Col lg={4}>
                                        <FormGroup>
                                            <Label htmlFor="email">Email</Label>
                                            <AvField
                                            name="custemail"
                                            type="email"
                                            className="form-control"
                                            id="custemail"
                                            placeholder="Enter Email"
                                            required
                                            />
                                        </FormGroup>
                                        </Col>

                                        <Col lg={4}>
                                        <FormGroup>
                                            <Label htmlFor="email">Phone Number</Label>
                                            <AvField
                                            name="phonenumber"
                                            type="number"
                                            className="form-control"
                                            id="phonenumber"
                                            placeholder="Enter Phone Number"
                                            required
                                            />
                                        </FormGroup>
                                        </Col>

                                        <Col lg={4}>
                                        <FormGroup>
                                            <Label htmlFor="email">Wallet Balance</Label>
                                            <AvField
                                            name="wBalance"
                                            type="number"
                                            className="form-control"
                                            id="wBalance"
                                            placeholder="Wallet Balance"
                                            required
                                            />
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <ModalFooter>
                                        <Button type="button" color="light" onClick={() => this.setState({ modal_static: false }) }>Calcel</Button>
                                        <Button type="submit" color="primary">Add</Button>
                                    </ModalFooter> 
                            
                            </AvForm>
                            
                            </ModalBody>
                            </Modal>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Customers;