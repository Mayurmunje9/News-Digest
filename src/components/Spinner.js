import React, { Component } from 'react'
import loading from './loading.webp'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center" >
                <img src={loading} alt="loading" style={{height:"40px"}}className='my-3'/>
            </div>
        )
    }
}

export default Spinner