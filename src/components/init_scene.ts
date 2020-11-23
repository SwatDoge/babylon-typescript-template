//required
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { Scene } from "@babylonjs/core/scene";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Vector3 } from "@babylonjs/core/Maths/math";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";

export default function init_scene(engine, canvas): Scene {
    //build scene
	const scene = new Scene(engine);

    //set a camera
	const camera = new ArcRotateCamera("Camera", (Math.PI / 4), (Math.PI / 4), 5, Vector3.Zero(), scene);
	camera.attachControl(canvas, true);

    //set a light
	const light = new HemisphericLight("Lamp", new Vector3(1, 1, 0), scene);
	
	//create an object
	const box: Mesh = MeshBuilder.CreateBox("box", {}, scene);
	box.material = new StandardMaterial("mat", scene);

	return scene;
}