import React from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";

export default function StyleWrapper({ children }: { children: React.ReactNode }) {
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			{children}
		</Container>
	);
}
