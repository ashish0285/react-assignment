import React from "react";
import "./style.css";
import Post from "./Post";
const blogPosts = [
	{
	title: "JAVA - Hibernate",
	body: "Hibernate is best ORM",
	author: "Ashish Mishra"
	},
	{
	title: "Javascript",
	body: "I am Javascript Certified",
	author: "Ankit Kumar"
	},
	{
	title: "Data Structures & Algorithm",
	body: "DSA should be a must for everyone",
	author: "Shobhit Dixit"
	},
];
const Posts = () => {


return (
	<div className="posts-container">
	{blogPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
);
};

export default Posts;