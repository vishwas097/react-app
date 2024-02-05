import React from "react";
import UserContext from "../utils/userContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
    };
  }

  async componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("Vish bro!");
    // }, 1000);
    const user = await fetch("https://api.github.com/users/vishwas097");
    const json = await user.json();

    this.setState({
      userDetails: json,
    });
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  render() {
    const { name, location, avatar_url, followers, following } =
      this.state.userDetails;
    return (
      <div className="m-4 p-4">
        <div className="text-center">
          <img className="w-40 mx-auto" src={avatar_url} />
        </div>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h2 className="font-bold my-3">Name : {loggedInUser}</h2>
          )}
        </UserContext.Consumer>
        <h5>Location: {location}</h5>
        <h5>followers : {followers}</h5>
        <h5>following: {following}</h5>
      </div>
    );
  }
}

export default UserClass;
