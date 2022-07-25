import axios from 'axios';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class AddManager extends Component {
    constructor(){
        super();
        this.state={
            Manager:[],
            managerid:'',
            firstName:'',
            lastName:'',
            e_Mail:'',
            contactNumber:'',
            department:''
        }
        this.create=this.create.bind(this);
        this.handleChanges=this.handleChange.bind(this);
    }

    create(e)
    {
        axios.post('http://localhost:50735/api/ManagerDetails/AddManager',{
            employeeId:this.state.employeeId,
            firstName:this.state.firstName,
            lastName:this.state.lastName ,
            e_Mail:this.state.e_Mail,
            contactNumber:this.state.contactNumber,
            department:this.state.department,
            

    }).then(response=>{
        console.warn(response);
        alert("New Manager Added Successsfully");
    })
    .catch(error=>{
        alert("error");
    })
    }

    handleChange(changeObject)
    {
        this.setState(changeObject);    
    }
    SearchById(emp){
        
        let employeeId=emp;
        axios.get('http://localhost:50735/api/EmployeeDetails/ShowSpecific/'+employeeId)
        .then(Response=>{
            this.setState({
                employeeId:Response.data.employeeId,
                firstName:Response.data.firstName,
                lastName:Response.data.lastName,
                e_Mail:Response.data.e_Mail,
                contactNumber:Response.data.contactNumber,
                department:Response.data.department,
                dateJoined:Response.data.dateJoined,
                managerId:Response.data.managerId,
                leaveBalance:Response.data.leaveBalance,
                password:Response.data.password 
            })

        })
    }
    
    componentDidMount(){
        this.SearchById();
        
    }

    
    render() {
        // const{employeeId}=this.state;
        const{firstName}=this.state;
        const{lastName}=this.state;
        const{e_Mail}=this.state;
        const{contactNumber}=this.state;
        const{department}=this.state;
        const{dateJoined}=this.state;
        const{managerId}=this.state;
        const{leaveBalance}=this.state;
        const{password}=this.state;

        return (

            <><div className="App-header">
                <Card style={{ height:'32rem',width:'23rem'  }}>
                <Card.Header className="text-center">Create Manager</Card.Header>
                <Card.Body>
          <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
            <table  >
            <tbody>
            <tr >
                <td ><label >Employee Id</label>
                <input className="spacer" type="text" name="employeeId"  onChange={(e)=>this.handleChange({employeeId:e.target.value})}></input></td>
                
                </tr>
              <tr >
                <td ><label >First Name</label>
                <input className="spacer" type="text" name="firstName" defaultValue={firstName} onChange={(e)=>this.handleChange({firstName:e.target.value})}></input></td>
                </tr>
                <tr>
                <td ><label >Last Name</label>
                <input className="spacer" type="text" name="lastName" onChange={(e)=>this.handleChange({lastName:e.target.value})}></input></td>
                </tr>
                <tr>
                <td><label >E Mail</label>
                <input className="spacer" type="text" name="e_Mail" onChange={(e)=>this.handleChange({e_Mail:e.target.value})}></input></td>
                </tr>
                <tr>
                <td>
                  <label >Contact Number</label>
                  <input className="spacer" type="text" name="contactNumber"  onChange={(e)=>this.handleChange({contactNumber:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >Department</label>
                  <input className="spacer" type="text" name="department"  onChange={(e)=>this.handleChange({department:e.target.value})}></input>
                </td>
              </tr>    
              <tr>
                <td><Button type="button" onClick={this.create}>Add Manager</Button> 
                </td>
              </tr>
              </tbody>
            </table>

          </form>
          </Card.Body>
          </Card>
          </div>
          </>

          
        );

        }
}