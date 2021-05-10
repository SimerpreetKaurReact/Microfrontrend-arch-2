import React from 'react'
import Emitter from '../services/emitter';



class Header extends React.Component {
    constructor(props) {
        super(props);
        document.addEventListener('INPUT_FROM_MAIN', (event) => {
            console.log(event)
            this.setState({ header: event.detail.new })
        });
    }
    state = { header: 'Default header' };

    render() {
        return (
            <header className="header">
                <h1>{this.state.header}</h1>
                <div>Header listens only to the first occurrence new input.</div>
            </header>
        )
    }
}

export default Header