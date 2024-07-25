import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";
import { GitHub } from "@mui/icons-material";

interface Project {
	name: string;
	image: string;
	details: string;
	stack: string[];
	demoLink?: string;
	repoLink?: string;
}

interface ProjectCardProps {
	project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }: { project: any }) => {
	return (
		<Card sx={{ maxWidth: 345, margin: "auto", border: "3px solid", borderColor: "primary.main", borderRadius: "8px" }}>
			<CardMedia component="img" width="200" height="200" image={project.image} alt={project.name} />
			<CardContent>
				<Typography variant="h5" component="div">
					{project.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{project.details}
				</Typography>
				<Box sx={{ marginTop: 2 }}>
					<Typography variant="body1" component="div">
						Stack:
					</Typography>
					{project.stack.map(
						(
							tech:
								| string
								| number
								| boolean
								| React.ReactElement<any, string | React.JSXElementConstructor<any>>
								| Iterable<React.ReactNode>
								| React.ReactPortal
								| null
								| undefined,
							index: React.Key | null | undefined
						) => (
							<Typography key={index} variant="body2" color="text.secondary">
								{tech}
							</Typography>
						)
					)}
				</Box>
				<Box sx={{ marginTop: 2 }}>
					<Button
						variant="contained"
						color="primary"
						href={project.demoLink}
						target="_blank"
						rel="noopener noreferrer"
						disabled={project.demoLink === "#"}
					>
						View Demo
					</Button>
					<Button variant="contained" sx={{ marginLeft: 1, px: 0 }} href={project.repoLink} target="_blank" rel="noopener noreferrer">
						<GitHub />
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
};
