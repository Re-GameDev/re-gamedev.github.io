import React from 'react';
import classnames from "classnames";

export default function HomePage({ children, className }) {
  return (
    <div className={classnames("Page", className)}>
      {children}
    </div>
  );
}
