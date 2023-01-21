import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div className="error">
      <div id="error-page">
        <h1>أُووبس!</h1>
        <span>عذرا ، حدث خطأ غير متوقع.</span>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
