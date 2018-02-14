import React from "react";

const Title = ({todoNumber}) => {
	return (
		<div>
			<h1>ToDoList App</h1>
			<h2>You have ({todoNumber}) tasks</h2>	
		</div>
	);
}

export default Title;


