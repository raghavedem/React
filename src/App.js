import React, { Component } from 'react'
import FormContainer from './components/partials/FormContainer';


export default class App extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <br/>
                <div className="card">
                        
                        <div className="card-header"> App Component</div>
                        <div className="card-body">
                                <div className="card-text">
                                        <FormContainer/>
                                    </div>
                            </div>
                    </div>
                    </div>
            </div>
        )
    }
}
