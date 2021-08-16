import React from 'react';
import './Hello.css'

class Hello extends React.Component<any, any> {
    render() {
        return (
            <div className='tc'>
                <p className='f1'>I am a Fucking Retard</p>
                <p className='f4'>And a {this.props.adjective}</p>
            </div>
        );
    }
}

export default Hello;
