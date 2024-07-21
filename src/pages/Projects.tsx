import { Container, Grid } from "@mui/material";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../utils/data";

export const Projects: React.FC = () => {
	return (
		<Container sx={{ my: 2 }}>
			<Grid container spacing={4}>
				{projects.map((project, index) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
						<ProjectCard project={project} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};
