/**
 * Created by Daniel on 3/6/2016.
 */
'use strict';
import React from 'react';
import StockLookupService from './StockLookupService';

export default class StockEntry extends React.Component {
    constructor() {
        super();
        this.state = {searchString: ''};
        this.handleNewSymbol = this.handleNewSymbol.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({searchString: event.target.value});
    }

    handleNewSymbol(event) {
        if (event.target.value === null || event.target.value.length <= 0) {
            return;
        }
        StockLookupService.makeCall(event.target.value);
        this.setState({searchString: ''});
    }

    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-brand">{this.props.name}</div>
                    <div className="navbar-form navbar-left">
                        <div id="form-group">
                            <input type="text" className="form-control" placeholder="Search ..."
                                   onBlur={this.handleNewSymbol} onChange={this.handleChange}
                                   value={this.state.searchString}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

StockEntry.propTypes = {
    name: React.PropTypes.string.isRequired
};

StockEntry.defaultProps = {
    name: ''
};