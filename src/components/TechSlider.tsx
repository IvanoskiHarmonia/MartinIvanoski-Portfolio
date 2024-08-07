import { Box } from "@mui/material";
import { TechStackSlider } from "../utils/TechStackSlider";
import { techStack } from "../utils/data";

export const TechSlider: React.FC = () => {
	return (
		<Box sx={{ marginTop: 2 }}>
			<TechStackSlider stack={techStack} />
		</Box>
	);
};
