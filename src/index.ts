//required
import "./index.css";
import "@babylonjs/inspector";
import { Engine } from "@babylonjs/core/Engines/engine";

//custom
import init_scene from "./components/init_scene";

//create canvas and set resolution
const canvas = document.createElement("canvas");
canvas.width = 2560;
canvas.height = 1440;
document.getElementsByTagName("body")[0].appendChild(canvas);

//create engine
const engine: Engine = new Engine(canvas, true);

//create a scene
const scene = init_scene(engine, canvas);
engine.runRenderLoop(() => scene.render());

//resize the engine initially or when the screen resizes.
engine.resize();
window.addEventListener('resize', () => engine.resize());

//displays the inspector. Useful for testing and tinkering.
/*
	scene.debugLayer.show({
		overlay: true,
		embedMode: true
	});
*/