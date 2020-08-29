/** @format */

import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/majid-rounded.png";

const activeStyless = {
	background: "linear-gradient(88.33deg, #a88bff -7.64%, #5874e6 145.94%)",
	color: "white",
};

const Sidebar = () => {
	return (
		<SidebarWrapper>
			<SidebarInner>
				<SidebarHead>
					<Link to="/" title="Logo">
						<Img src={logo} alt="Majid" />
					</Link>
					<Bio>
						<Bio.Name>Majid Eltayeb</Bio.Name>
						<Bio.Sub> Frontend Engineer , Doodler, Basketballer</Bio.Sub>
					</Bio>
				</SidebarHead>
				<SidebarMenu>
					<MenuNavLink
						activeStyle={activeStyless}
						// activeClassName="active"
						// className="navbar-item"
						to="/about">
						About
					</MenuNavLink>
					<MenuNavLink
						activeStyle={activeStyless}
						// activeClassName="active"
						// className="navbar-item"
						to="/projects">
						Projects
					</MenuNavLink>
					<MenuNavLink
						activeStyle={activeStyless}
						// activeClassName="active"
						// className="navbar-item"
						to="/blog">
						Blog
					</MenuNavLink>
					<MenuNavLink
						activeStyle={activeStyless}
						// activeClassName="active"
						// className="navbar-item"
						to="/contact">
						Contact
					</MenuNavLink>
					{/* <Link className="navbar-item" to="/contact/examples">
					Form Examples
				</Link> */}
				</SidebarMenu>
			</SidebarInner>
		</SidebarWrapper>
	);
};

export default Sidebar;

const SidebarWrapper = styled.aside`
	/* max-width: 20%; */
	width: 100%;
	/* border-right: 2px solid blue; */
	height: 100vh;
	/* background-color: #00f03f; */
	/* position: fixed; */
	flex: 1;
	position: relative;
	padding: 0;
`;

const MenuNavLink = styled(Link)`
	padding: 5%;
	padding-left: 10%;
	color: black;
`;

const SidebarMenu = styled.div`
	/* border: 2px solid orange; */
	display: flex;
	justify-content: center;
	flex-direction: column;
	/* padding-left: 3%; */
	margin-top: 30px;
	overflow: hidden;

	/* padding: 0 10%; */
	/* box-shadow: -6px -2px 16px rgb(220 225 239 / 80%),
		6px 2px 16px rgb(205 205 205 / 48%); */
	/* border-radius: 15px; */
`;
const SidebarInner = styled.div`
	top: 0;
	left: 0;
	width: 100%;
	/* padding: 1%; */
	box-shadow: -6px -2px 16px rgb(220 225 239 / 80%),
		6px 2px 16px rgb(205 205 205 / 48%);
	border-bottom-right-radius: 15px;
	overflow: hidden;
	/* padding-top: 10%; */
	/* &:after {
		background: linear-gradient(180deg, #e6e6e6 0, #e6e6e6 48%, #fff);
		position: absolute;
		content: "";
		width: 0.0625rem;
		height: 70em;
		top: -20%;
		right: 0px;
	} */
`;
const SidebarHead = styled.div`
	display: flex;
	/* padding: 0 10%; */
	flex-direction: column;
	align-items: flex-start;
	padding: 10%;
	/* box-shadow: -6px -2px 16px rgb(220 225 239 / 80%),
		6px 2px 16px rgb(205 205 205 / 48%); */
	/* border-radius: 15px; */
`;

const Img = styled.img`
	border: 1px solid #e6e6e6;
	height: 7em;
	border-radius: 50%;
`;
const Bio = styled.div``;
const Name = styled.div`
	font-family: sans-serif;
	font-weight: bold;
	font-size: 1.5rem;
`;
const Sub = styled.div`
	color: #888;
`;

Bio.Name = Name;
Bio.Sub = Sub;
