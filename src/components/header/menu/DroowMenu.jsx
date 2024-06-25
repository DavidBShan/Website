import React from "react";
import Navbar, { Nav } from "../../nav/Navbar";
import Brand from "../../brand/Brand";
import MenuContent from "./MenuContent";

const menuContent = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Portfolio", to: "/slider" },
    { name: "Connect", to: "/contact" },
];

const DroowMenu = ({ hamburger }) => {
    let $key = 0;
    const getSubMenu = (items) => {
        $key++;
        if (items.dropdownMenu) {
            return (
                <Nav.Dropdown name={items.name} key={$key}>
                    {items.dropdownMenu.map((item) => getSubMenu(item))}
                </Nav.Dropdown>
            );
        }
        return (
            <Nav.Link to={items.to} key={$key}>
                {items.name}
            </Nav.Link>
        );
    };

    return (
        <Navbar hamburger={hamburger}>
            <Navbar.Brand to={"/"}>
                <Brand width="10vw" height="auto" />
            </Navbar.Brand>

            <Navbar.Collapse cover="Menu">
                <Nav>{menuContent.map((item) => getSubMenu(item))}</Nav>
                <MenuContent className="section-margin" />
            </Navbar.Collapse>
        </Navbar>
    );
};

DroowMenu.defaultProps = {
    hamburger: false,
};

export default DroowMenu;
