import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="text-center">
      {/* <User name={"Vishwas Function"} role={"Developer"} /> */}
      <UserClass name={"Vishwas Class"} role={"Developer"} />
    </div>
  );
};

export default About;
