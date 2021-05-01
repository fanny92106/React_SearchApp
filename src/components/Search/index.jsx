import axios from 'axios';
import React, { Component } from 'react'

export default class Search extends Component {
    search = () => {
        const{KeywordElement:{value:keyWord}} = this;
        // send request
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                this.props.saveUsers(response.data.items)
                },
            error => {console.log('error', error);}
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.KeywordElement = c} type="text" placeholder="enter the name you search"/>
                    &nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
