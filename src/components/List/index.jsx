import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

    state = {
        users: [], // users init array
        isFirst: true, // if first load page
        isLoading: false, // mark if in loading process
        err: '' // store request related error message
    }

    componentDidMount() {
        this.token = PubSub.subscribe('atguigu', (_, stateObj) => {
            this.setState(stateObj)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div className="row">
               {
                   isFirst ? <h2>Please nput keyword, then click search </h2> :
                        isLoading ? <h2>Loading...</h2> :
                            err ? <h2 style={{color: 'red'}}>{err}</h2> :
                            users.map((userObj) => {
                                return (
                                    <div key={userObj.id} className="card">
                                        <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                        <img src={userObj.avatar_url} alt="xx" style={{width: '100px'}}/>
                                        </a>
                                        <p className="card-text">{userObj.login}</p>
                                    </div>
                                )}
                        )
                    }
            </div>
        )
    }
}