import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import "./Header.css";

const TypingEffect = styled(Typography)({
	overflow: "hidden",
	borderRight: ".15em solid black",
	whiteSpace: "nowrap",
	margin: "0 auto",
	letterSpacing: ".15em",
	animation: `
    typing 4.0s steps(45, end),
    blink .75s step-end infinite
  `,
});

export const Header: React.FC = () => {
	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: { xs: "20rem", md: "30vh" },
				overflow: "hidden",
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				alignItems: "center",
				justifyContent: "center",
				padding: 2,
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flex: "none",
					marginRight: { xs: 0, sm: 2 },
				}}
			>
				<Avatar
					alt="Profile Picture"
					src="profile.jpeg"
					sx={{
						width: { xs: 200, sm: 250 },
						height: { xs: 200, sm: 250 },
						border: "3px solid",
						borderColor: "primary.main",
						boxShadow: 3,
						my: { xs: 2, sm: 0 },
					}}
				/>
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flex: "none",
					marginLeft: 2,
					textAlign: "center",
					wordBreak: "break-word",
				}}
			>
				<TypingEffect
					variant="h4"
					sx={{
						fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
						mt: { xs: 3, sm: 2, md: 0 },
					}}
				>
					&lt;/Software Developer&gt;
				</TypingEffect>
			</Box>
		</Box>
	);
};
