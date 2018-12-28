import React from "react";
import styled from "styled-components";

export const P = styled.p`
  text-align: justify;
  text-indent: 20px;
  margin: 0px 20px 0px 10px;
`;
export const LogoLeft = ({ img, size }) => {
  return (
    <div className="logoleft">
      <div
        style={{
          width: "100%",
          height: "100%",
          zIndex: 2,
          position: "absolute",
        }}
      >
        <svg
          style={{ zIndex: 2, position: "absolute", right: 0 }}
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" />
        </svg>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          zIndex: 3,
          display: "grid",
          position: "absolute",
        }}
      >
        <img
          src={img}
          style={{
            margin: "auto",
            width: size,
          }}
        />
      </div>
    </div>
  );
};

LogoLeft.defaultProps = {
  size: "70%",
};
