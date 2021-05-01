import axios from 'axios';
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search = () => {
        const{KeywordElement:{value:keyWord}} = this;
        // this.props.updateAppState({isFirst: false, isLoading:true})
        PubSub.publish('atguigu', {isFirst: false, isLoading: true})
        // send request
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                // this.props.updateAppState({isLoading:false, users:response.data.items})
                PubSub.publish('atguigu', {isLoading:false, users:response.data.items})
                },
            error => {
                // this.props.updateAppState({isLoading:false, err: error.message})
                PubSub.publish('atguigu', {isLoading:false, err: error.message})
            }
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
