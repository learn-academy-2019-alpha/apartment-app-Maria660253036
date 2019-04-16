import React from "react"
import PropTypes from "prop-types"

import NewApartment from './pages/NewApartment'

class Apartments extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            apartments: []
        }
    }

    componentDidMount(){
        fetch('/apartments.json')
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            this.setState({apartments: json})
        })
        .catch((e) => {
            console.log("Error", e)
        })
    }

  render () {
    return (
      <div>
        <h1>Apartments</h1>
        <table>
            <tbody>
                <tr>
                    <th>Apartment Name</th>
                    <th>Street Address 1</th>
                    <th>Street Address 2</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Postal Code</th>
                    <th>Country</th>
                </tr>

                {this.state.apartments.map((apartment, index) =>
                    <tr key={index}>
                        <td>{apartment.name}</td>
                        <td>{apartment.address1}</td>
                        <td>{apartment.address2}</td>
                        <td>{apartment.city}</td>
                        <td>{apartment.state}</td>
                        <td>{apartment.zip}</td>
                        <td>{apartment.country}</td>
                    </tr>
                )}
            </tbody>
        </table>
        <Link to="/new/">New Apartment</Link>
      </div>
    );
  }
}

export default Apartments
