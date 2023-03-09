import React from "react";

const Visual = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="visual">
      <div className="inner">
        {/* <img src={`${path}/images/visual.png`} alt="visual" /> */}
        <img src="/images/visual.png" alt="visual" />
      </div>
    </div>
  );
};

export default Visual;
