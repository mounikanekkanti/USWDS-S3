/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Search } from "../Search";
import "./style.css";

export const QuickSearch = ({
  className,
  quickSearchClassName,
  searchOverlapClassName,
  searchGroupClassName,
  searchVector4StyleOverrideClassName,
}) => {
  return (
    <div className={`quick-search ${className}`}>
      <div className={`text-wrapper-9 ${quickSearchClassName}`}>Quick Search</div>
      <Search
        className="search-instance"
        groupClassName={searchGroupClassName}
        overlapClassName={searchOverlapClassName}
        size="small"
        vector4StyleOverrideClassName={searchVector4StyleOverrideClassName}
      />
    </div>
  );
};
