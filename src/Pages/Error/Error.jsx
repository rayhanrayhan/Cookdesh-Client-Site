import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <div id="error-page" className="flex justify-center">
        <img src="https://i.ibb.co/G5vxy5B/4044.png" alt="" />
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="btn btn-primary">GO TO Home</button>
        </Link>
      </div>
    </div>
  );
}
