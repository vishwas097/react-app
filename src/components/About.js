import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <h4>Nothing Much!</h4>
      <User name={"Vishwas Function"} role={"Developer"} />
      <UserClass name={"Vishwas Class"} role={"Developer"} />
    </div>
  );
};

export default About;
