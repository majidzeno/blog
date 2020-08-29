/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import styled from "styled-components/macro";

const TemplateWrapper = ({ children }) => {
	const { title, description } = useSiteMetadata();
	return (
		<LayoutContainer>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={`${withPrefix("/")}img/apple-touch-icon.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix("/")}img/favicon-32x32.png`}
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix("/")}img/favicon-16x16.png`}
					sizes="16x16"
				/>

				<link
					rel="mask-icon"
					href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
					color="#ff4400"
				/>
				<meta name="theme-color" content="#fff" />

				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content="/" />
				<meta
					property="og:image"
					content={`${withPrefix("/")}img/og-image.jpg`}
				/>
			</Helmet>
			<Sidebar />
			<MainContainer>{children}</MainContainer>
			{/* <Footer /> */}
		</LayoutContainer>
	);
};

export default TemplateWrapper;

const LayoutContainer = styled.div`
	display: flex;
	position: relative;
	/* flex-flow: row wrap; */

	/* align-items: center; */
	justify-content: center;
	max-width: 84em;
	margin: 0 auto;
`;

const MainContainer = styled.main`
	width: 100%;
	flex: 3;
	height: 100vh;
	overflow: scroll;
	/* max-width: 80%;
	margin-left: 20%; */
`;
