import React from "react";
import "./App.css";
import axios from "axios";
import Following from "./Components/Following";
import Followers from './Components/Followers';
import { Link } from 'react-router-dom';

class App extends React.Component {
  state = {
    login: "",
    id: 0,
    node_id: "",
    avatar_url: "",
    url: "",
    followers_url: "",
    following_url:
      "",
    repos_url: "",
    name: "",
    location: "",
    bio: "",
    followers: 0,
    following: 0,
    search_login: "",
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/shawn2776`)
      .then((res) => {
        this.setState({
          login: res.data.login,
          id: res.data.id,
          node_id: res.data.node_id,
          avatar_url: res.data.avatar_url,
          url: res.data.url,
          followers_url: res.data.followers_url,
          following_url: res.data.following_url,
          repos_url: res.data.repos_url,
          public_repos: res.data.public_repos,
          name: res.data.name,
          location: res.data.location,
          bio: res.data.bio,
          followers: res.data.followers,
          following: res.data.following,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeHandler = evt => {
    this.setState({
      search_login: evt.target.value,
    })
  }

  clickHandler = evt => {
    evt.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.search_login}`)
      .then((res) => {
        this.setState({
          login: res.data.login,
          id: res.data.id,
          node_id: res.data.node_id,
          avatar_url: res.data.avatar_url,
          url: res.data.url,
          followers_url: res.data.followers_url,
          following_url: res.data.following_url,
          repos_url: res.data.repos_url,
          public_repos: res.data.public_repos,
          name: res.data.name,
          location: res.data.location,
          bio: res.data.bio,
          followers: res.data.followers,
          following: res.data.following,
        });
      })
      .catch((err) => {
        alert(err)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h2>Github User Info</h2>
        </header>
        <div className="search-container">
          <form>
            <input
              type="text"
              name="search"
              placeholder="Enter Github Username"
              onChange={this.changeHandler}
            ></input>
            <button onClick={this.clickHandler}>Get Profile</button>
            <br />
            <br />
          </form>
        </div>
        <div className="user-container">
          <img src={this.state.avatar_url} alt="user_image" />
        </div>
        <div className="user-container">
          <section className="name">
            <h2>{this.state.name}</h2>
            Profile: <a href={this.state.url}>{this.state.login}</a>
          </section>
          {this.state.location}
        </div>
        <div className="user-container">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Repos: {this.state.public_repos}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href={this.state.repos_url}>
                  {this.state.repos_url}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="user-container">
          Following: {this.state.following}
        </div>

        <div className="user-container">
        Followers: {this.state.followers}
        <Followers followers={this.state.followers_url}/>
        </div>


      </div>
    );
  }
}

export default App;


{/* <div className="dropdown">
<button
  className="btn btn-secondary dropdown-toggle"
  type="button"
  id="dropdownMenuButton"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
  Followers: {this.state.followers}
</button>
<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <li>
    <Link className="dropdown-item" to={<Followers />}>
      <Followers followers={this.state.followers_url}/>
    </Link>
  </li>
</ul>
</div> */}


{/* <div className="dropdown">
<button
  className="btn btn-secondary dropdown-toggle"
  type="button"
  id="dropdownMenuButton"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
  Following: {this.state.following}
</button>
<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <li>
    <Link className="dropdown-item" to={<Following />}>
      <Following followers={this.state.following_url} />
    </Link>
  </li>
</ul>
</div> */}