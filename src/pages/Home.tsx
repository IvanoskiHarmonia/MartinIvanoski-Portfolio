import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { TechSlider } from "../components/TechSlider";
import { Projects } from "./Projects";
import { Box } from "@mui/material";

export const Home: React.FC = () => {
	return (
		<Box>
			<Navbar />
			<Header />
			<TechSlider />
			<Projects />
		</Box>
	);
};
export default Home;
