import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

export const Header: React.FC = () => {
	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: { xs: "40vh", sm: "30vh" },
				overflow: "hidden",
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
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
				<Typography
					variant="h4"
					component="h2"
					sx={{
						fontSize: { xs: "2.5rem", sm: "2rem", md: "4rem" },
					}}
				>
					Software Developer
				</Typography>
			</Box>
		</Box>
	);
};
