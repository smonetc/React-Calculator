import React, { Component } from 'react'

class ResultComponent extends Component{
    render(){
        let {results} = this.props

        return(
            <div className='result'>
                <p>{results}</p>
            </div>
        )
    }
}

export default ResultComponent;