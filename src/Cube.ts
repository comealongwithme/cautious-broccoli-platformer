import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

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

function createCube() {
	const geometry = new BoxGeometry(1, 1, 1)
	const material = new MeshBasicMaterial({color: 0x00ff00})
	return new Mesh(geometry, material)
}

export function setup() {
	const renderer = setUpRenderer(document.getElementById('app'))
	const camera = setUpCamera()
	const cube = createCube()
	const scene = setUpScene().add(cube)

	function animate() {
		requestAnimationFrame(animate)
		cube.rotation.x += 0.01
		cube.rotation.y += 0.01
		renderer.render(scene, camera)
	}

	animate()
}
