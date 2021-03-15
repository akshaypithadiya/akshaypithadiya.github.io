import React from "react";

const NotFound = () => {
  const style = {
    width: "50px",
  };
  return (
    <div className="NotFound" style={{ marginTop: "40px" }}>
      <center>
        <img src="/page_not_found.svg" width="30%" height="30%" />
        <p>Page not found</p>
      </center>
    </div>
  );
};

export default NotFound;
