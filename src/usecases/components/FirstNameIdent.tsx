

import React from "react";
import "../../styles/firstName.scss";

interface FirstNameIdentProps {
	firstName: string;
	
}

const FirstNameIdent: React.FC<FirstNameIdentProps> = ({ firstName }) => {
	
	return (
		
			<div className="welcome-container">
				<h1>
					<span> Bonjour </span> {firstName}
				</h1>
				<div className="tagline">
					Félicitation ! Vous avez explosé vos objectifs hier 👏
				</div>
			</div>
		
	);
};

export default FirstNameIdent;
