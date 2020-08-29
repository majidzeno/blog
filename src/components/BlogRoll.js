/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import BackgroundImage from "gatsby-background-image";

import styled from "styled-components/macro";

class BlogRoll extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;

		return (
			<BlogWrapper>
				{posts &&
					posts.map(({ node: post }) => (
						<div
							// className="is-parent"
							key={post.id}>
							<Article
							// className={`blog-list-item tile is-child box notification ${
							// 	post.frontmatter.featuredpost ? "is-featured" : ""
							// }`}
							>
								<Header>
									{post.frontmatter.featuredimage ? (
										<Article.Thumbnail
										//  className="featured-thumbnail"
										>
											{/* <PreviewCompatibleImage
												imageInfo={{
													image: post.frontmatter.featuredimage,
													alt: `featured image thumbnail for post ${post.frontmatter.title}`,
												}}
											/> */}

											<StyledBackgroundSection
												Tag="section"
												fluid={
													post.frontmatter.featuredimage.childImageSharp.fluid
												}
												backgroundColor={`#040e18`}></StyledBackgroundSection>
										</Article.Thumbnail>
									) : null}
								</Header>
								<PostWrapper>
									<p
									// className="post-meta"
									>
										<Article.Title
											// className="title has-text-primary is-size-4"
											to={post.fields.slug}>
											{post.frontmatter.title}
										</Article.Title>
										{/* <span> &bull; </span> */}
										<Article.Date
										//  className="subtitle is-size-5 is-block"
										>
											{post.frontmatter.date}
										</Article.Date>
									</p>
									<Article.Excerpt>
										{post.excerpt}
										<br />
										<KeepReadingButton className="button" to={post.fields.slug}>
											Keep Reading →
										</KeepReadingButton>
									</Article.Excerpt>
								</PostWrapper>
							</Article>
						</div>
					))}
			</BlogWrapper>
		);
	}
}

BlogRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
};

export default () => (
	<StaticQuery
		query={graphql`
			query BlogRollQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
				) {
					edges {
						node {
							excerpt(pruneLength: 200)
							id
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								featuredpost
								featuredimage {
									childImageSharp {
										fluid(maxWidth: 120, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <BlogRoll data={data} count={count} />}
	/>
);

const BlogWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const Article = styled.article`
	/* background-color: #cff; */
	display: flex;
	overflow: hidden;
	margin: 1%;
	position: relative;
	border-radius: 15px;
	box-shadow: -6px -2px 16px rgb(220 225 239 / 80%),
		6px 2px 16px rgb(205 205 205 / 48%);
	height: 100%;
	min-height: 206px;
	max-height: 260px;
	/* &:after {
		background: linear-gradient(180deg, #e6e6e6 0, #e6e6e6 48%, #fff);
		position: absolute;
		content: "";
		width: 100%;
		height: 0.0625rem;
		bottom: -4%;
		left: 0px;
	} */
`;
const Header = styled.header`
	flex: 1;
	display: flex;
`;

const Title = styled(Link)`
	color: #000 !important;
	color: #f00;
	display: block;
	font-size: 2rem;
	font-weight: bold;
	text-decoration: none !important;
	font-family: sans-serif;
	line-height: 40px;

	/* box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 0.6),
		inset -1px -1px 1px rgba(12, 13, 18, 0.06),
		-1px -1px 4px 0px rgba(255, 255, 255, 0.6),
		-2px -2px 8px 0px rgba(255, 255, 255, 0.6),
		1px 1px 4px 0px rgba(12, 13, 18, 0.06),
		2px 2px 8px 0px rgba(12, 13, 18, 0.06); */
`;

const Thumbnail = styled.div`
	width: 25vw;
	> div {
		border-radius: 0 !important;
	}
`;
const Date = styled.div`
	/* margin-top: -0.5em; */
	font-size: 0.8rem;
`;

const Excerpt = styled.p`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
Article.Thumbnail = Thumbnail;
Article.Date = Date;
Article.Title = Title;
Article.Excerpt = Excerpt;

const PostWrapper = styled.div`
	/* border: 1px solid red; */
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	padding: 1em;
	p {
		margin: 0 !important;
	}
`;

const StyledBackgroundSection = styled(BackgroundImage)`
	width: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;

	div {
		position: static;
	}
`;

const KeepReadingButton = styled(Link)`
	align-self: flex-end;
`;
