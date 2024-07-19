import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import StyleWrapper from "./utils/StyleWrapper";

function App() {
	return (
		<div
			style={{
				backgroundImage: "linear-gradient(to right, #eee 1px, transparent 1px), linear-gradient(to bottom, #eee 1px, transparent 1px)",
				backgroundPosition: "left top",
				backgroundSize: "11px 11px",
			}}
		>
			<StyleWrapper>
				<Home />
				<Footer />
			</StyleWrapper>
		</div>
	);
}

export default App;
