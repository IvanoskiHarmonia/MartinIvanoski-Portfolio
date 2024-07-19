import React from "react";
import Slider from "react-slick";
import { Typography, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconType } from "react-icons";

interface TechStackItem {
	name: string;
	icon: IconType;
}

interface TechStackSliderProps {
	stack: TechStackItem[];
}

export const TechStackSlider: React.FC<TechStackSliderProps> = ({ stack }) => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "linear",
	};

	return (
		<Box sx={{ width: "100%", overflow: "hidden", padding: 2 }}>
			<Slider {...settings}>
				{stack.map((tech, index) => (
					<Box key={index} sx={{ padding: 2, textAlign: "center" }}>
						<tech.icon size={40} />
						<Typography variant="h6" align="center">
							{tech.name}
						</Typography>
					</Box>
				))}
			</Slider>
		</Box>
	);
};
