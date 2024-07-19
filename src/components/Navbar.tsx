import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const Navbar: React.FC = () => {
	return (
		<AppBar
			position="static"
			elevation={3}
			sx={{
				mx: 2,
				my: 1,
				width: "calc(100% - 32px)",
				boxSizing: "border-box",
				borderRadius: "8px",
			}}
		>
			<Container maxWidth="lg">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#"
						sx={{
							margin: "0 auto",
							display: { xs: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
							transform: "scale(1)",
							transition: "transform 0.2s ease-in-out",
							"&:hover": {
								transform: "scale(1.1)",
								transition: "transform 0.3s ease-in-out",
							},
						}}
					>
						Martin Ivanoski
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
