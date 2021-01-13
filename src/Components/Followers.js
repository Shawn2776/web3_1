import axios from "axios";
import React, { Component } from "react";

export default class Followers extends Component {
  state = {
    user: [],
  }

  componentDidMount() {
    axios
      .get(this.props.followers)
      .then((res) => {
        this.setState({
          user: res.data
        })
        console.log(this.state.user)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  render() {
    return (
      <div>
        {
          this.state.user.map(user => {
            return (
              <div key={user.id} className="name">
                {user.login}
              </div>
            )
          })
        }
      </div>
    )
  }
}
