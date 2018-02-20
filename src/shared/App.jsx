import React, { Component } from "react";
import PropTypes from 'prop-types';

import Grid from './Grid';

class App extends Component {

    render() {
        console.log("data: ", this.props.data);

        return (
            <div>
                <Grid data={this.props.data} />
            </div>
        )

    }
}

App.propTypes = {
    data: PropTypes.array.isRequired
}

export default App;
