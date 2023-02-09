import { Button } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";

type ErrorResponse = {
  data: any;
  status: number;
  statusText: string;
  message?: string;
};

const errorCheck = (error: any): error is ErrorResponse => {
  return "data" in error && "status" in error && "statusText" in error;
};

export default function ErrorPage() {
  const error: any = useRouteError();
  //   console.log(error);
  //   console.log(typeof error);

  if (errorCheck(error)) {
    return (
      <div
        id="error-page"
        className="vw-100 vh-100 d-flex flex-column align-items-center justify-content-center "
      >
        <h1 className="mb-3">Oops! Page not found</h1>
        <p className="mb-1">
          Sorry the route you are looking for does not exist.
        </p>
        <p className="mb-2">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <Button variant="warning">Home</Button>
        </Link>
      </div>
    );
  } else {
    return <></>;
  }
}
