/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Icon27 } from "../../icons/Icon27";
import { Icon50 } from "../../icons/Icon50";
import { Rectangle73 } from "../../icons/Rectangle73";
import "./style.css";

export const NavLink = ({
  state,
  type,
  current,
  className,
  frameClassName,
  linkClassName,
  text = "Link",
  sectionClassName,
  text1 = "Section",
  visible = true,
  to,
}) => {
  return (
    <Link className={`nav-link ${state} current-${current} ${className}`} to={to}>
      {current && ["hover", "normal"].includes(state) && (
        <>
          <div className="frame-9">
            <div className="link">
              {type === "link" && <>{text}</>}

              {type === "accordion" && <>{text1}</>}
            </div>
            {type === "accordion" && <Icon27 className="icon-4" color={state === "normal" ? "#565C65" : "#005EA2"} />}
          </div>
          <Rectangle73 className="rectangle-73" />
        </>
      )}

      {(!current || state === "active") && (
        <div className={`frame-9 ${frameClassName}`}>
          <div
            className={`link-2 ${
              type === "link" ? linkClassName : type === "accordion" ? sectionClassName : undefined
            }`}
          >
            {type === "link" && <>{text}</>}

            {type === "accordion" && <>{text1}</>}
          </div>
          {type === "accordion" && (
            <>
              <>
                {visible && (
                  <>
                    <>
                      {state === "active" && <Icon50 className="icon-4" />}

                      {!current && <Icon27 className="icon-4" color={state === "normal" ? "#565C65" : "#005EA2"} />}
                    </>
                  </>
                )}
              </>
            </>
          )}
        </div>
      )}
    </Link>
  );
};

NavLink.propTypes = {
  state: PropTypes.oneOf(["normal", "active", "hover"]),
  type: PropTypes.oneOf(["link", "accordion"]),
  current: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
  visible: PropTypes.bool,
  to: PropTypes.string,
};
