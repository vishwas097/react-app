import { useEffect } from "react";

const User = ({ name, role }) => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Function Use Effect")
        }, 1000);


        return () => {
            clearInterval(timer);
        }
    },[])

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <h5>{role}</h5>
      <h5>Datavid</h5>
      <h5>4 years of experience</h5>
    </div>
  );
};

export default User;
