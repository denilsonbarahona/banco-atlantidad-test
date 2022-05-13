import React, { forwardRef } from "react";
import "../styles/form.css";

const Form = forwardRef(({ children }, ref) => (
  <form ref={ref} className="form">
    {children}
  </form>
));

export default Form;
