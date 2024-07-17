import React from "react";
import { Box } from "@mui/system";

export default function StyleWrapper({ children }: { children: React.ReactNode }) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			{children}
		</Box>
	);
}
