import React from "react";
import "./BookBtn.css";

const BookBtn = props => (
  <button className={`book-btn btn btn-${props.btntype} ${props.extraclass} btn-sm`} {...props}>
    {props.children}
  </button>
);

export default BookBtn;
