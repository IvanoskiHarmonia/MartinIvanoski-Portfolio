import { LinkedIn } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import Link from "@mui/material/Link";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary">
			{"Copyright © "}
			Martin Ivanoski {new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				py: 3,
				px: 2,
				mt: "auto",
				backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800]),
			}}
		>
			<Container maxWidth="sm">
				<Typography variant="body1">
					Please connect with me on{" "}
					<Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
						LinkedIn
						<LinkedIn fontSize="small" />
					</Link>
				</Typography>
				<Copyright />
			</Container>
		</Box>
	);
}
