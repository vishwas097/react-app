import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>Error</h2>
      <h5>{error.status}-{error.statusText}</h5>
    </div>
  );
};

export default Error;
