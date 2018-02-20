import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Grid extends Component {
    
    render() {
        const repos = this.props.data;

        return(
            <div>
                <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                    {repos.map( ( { name, owner, stargazers_count, html_url}) => (
                     <li key={name} style={{margin:30}}>
                        <ul>
                            <li><a href ={html_url}>{name}</a> - @{owner.login}</li>
                            <li>{stargazers_count} stars</li>
                        </ul>
                    </li>   
                    ))}
                </ul>
            </div>
        );
    }
}

Grid.propTypes = {
    data: PropTypes.array.isRequired
};

export default Grid;
