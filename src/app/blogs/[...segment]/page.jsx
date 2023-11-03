import React from "react";

const SinglePage = ({params}) => {
    const [year,id]=params.segment
  return <div>this is single blog page:{year} for {id}</div>;
};

export default SinglePage;
