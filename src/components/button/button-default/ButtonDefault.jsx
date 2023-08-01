import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "../NavLink";
import { BsPrefixRefForwardingComponent } from "react-bootstrap/helpers";
import { NavLinkProps } from "react-bootstrap/NavLink";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { dsnCN } from "../../../hooks/helper";
import { Button } from "react-bootstrap";

interface ButtonDefaultProps
    extends BsPrefixRefForwardingComponent<"a", NavLinkProps> {
    icon?: IconProp;
    text: string;
}

function ButtonDefault(
    { icon, text, className, ...restProps }: ButtonDefaultProps,
    ref
) {
    return (
        <NavLink
            className={dsnCN("btn-default", className)}
            {...restProps}
            ref={ref}
        >
            {icon && (
                <button className="icon">
                    <FontAwesomeIcon icon={icon} />
                </button>
            )}
            <span className="text">{text}</span>
        </NavLink>
    );
}

export default React.forwardRef(ButtonDefault);
