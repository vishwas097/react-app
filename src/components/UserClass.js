import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
    };
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Vish bro!");
    }, 1000);
    const user = await fetch("https://api.github.com/users/vishwas097");
    const json = await user.json();

    this.setState({
      userDetails: json,
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { name, location, avatar_url, followers, following } =
      this.state.userDetails;
    return (
      <div className="user-card">
        <img className="avatar" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h5>Location: {location}</h5>
        <h5>followers : {followers}</h5>
        <h5>following: {following}</h5>
      </div>
    );
  }
}

export default UserClass;
