import {
	BoxGeometry,
	ColorRepresentation,
	Mesh,
	MeshBasicMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer
} from 'three'
import WebGL from './modules/WebGL'

export class Cube {
	geometry: BoxGeometry
	material: MeshBasicMaterial
	mesh: Mesh

	constructor({ width, height, depth, color } : { width: number, height: number, depth: number, color: ColorRepresentation }) {
		this.geometry = new BoxGeometry(width, height, depth)
		this.material = new MeshBasicMaterial({ color })
		this.mesh = new Mesh(this.geometry, this.material)
	}
}

function setUpScene() {
	return new Scene()
}

function setUpCamera() {
	const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
	camera.position.z = 5
	return camera
}

function setUpRenderer(container: HTMLElement | null) {
	const renderer = new WebGLRenderer()
	renderer.setSize(window.innerWidth, window.innerHeight)
	container && container.appendChild(renderer.domElement) || console.warn(`Couldn't find container to mount on`)
	return renderer
}

export function renderCube() {
	const renderer = setUpRenderer(document.getElementById('app'))
	const camera = setUpCamera()
	const cube = new Cube({ width: 1, height: 1, depth: 1, color: 0x00ff00 })
	const scene = setUpScene().add(cube.mesh)

	function animate() {
		requestAnimationFrame(animate)
		cube.mesh.rotation.x += 0.01
		cube.mesh.rotation.y += 0.01
		renderer.render(scene, camera)
	}

	if ( WebGL.isWebGLAvailable() ) {

		// Initiate function or other initializations here
		animate()

	} else {

		const warning = WebGL.getWebGLErrorMessage();
		document.getElementById( 'app' )?.appendChild( warning );

	}
}
