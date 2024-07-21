import { Email, GitHub, LinkedIn } from "@mui/icons-material";
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
			}}
		>
			<Container maxWidth="sm">
				<Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
					Please connect with me on{" "}
					<Link
						href="https://www.linkedin.com/in/martin-ivanoski-385843195/"
						target="_blank"
						rel="noopener noreferrer"
						sx={{ display: "flex", alignItems: "center", marginLeft: "3px" }}
					>
						<LinkedIn sx={{ marginLeft: "3px" }} />
					</Link>
					<Link
						href="https://github.com/IvanoskiHarmonia"
						target="_blank"
						rel="noopener noreferrer"
						sx={{ display: "flex", alignItems: "center", marginLeft: "3px" }}
					>
						<GitHub />
					</Link>
					<Link href="mailto:macohiho@gmail.com" sx={{ display: "flex", alignItems: "center", marginLeft: "3px" }}>
						<Email />
					</Link>
				</Typography>
				<Copyright />
			</Container>
		</Box>
	);
}
