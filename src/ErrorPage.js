import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button'

export default class ErrorPage extends Component {
    render() {
        return (
            <div class="errpage">
                <h1>404 page not found</h1>
                <h6>It seams you have found a page that dosen't exist</h6><br></br>
                <Button variant="outline-primary" href="/EmployeeDashboard">Return To Dashboard</Button>
            </div>
        )
    }
}
