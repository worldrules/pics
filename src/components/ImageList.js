import React from "react";
import "./ImageList.css";

export const ImageList = (props) => {
  // console.log(this.props)
  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });

  return <div className="image-list">{images}</div>;
};
