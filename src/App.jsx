import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";

import { OrbitControls } from "@react-three/drei";
import "./App.css";

function App() {
	return (
		<>
			<ARButton />
			{/* bro */}
			<Canvas camera={{ position: [3, 3, 6] }}>
				<XR>
					<ambientLight />
					{/* <Panel /> */}
					<mesh>
						<boxGeometry />
						<meshBasicMaterial color="blue" />
					</mesh>
					<OrbitControls />
				</XR>
			</Canvas>
		</>
	);
}

export default App;
