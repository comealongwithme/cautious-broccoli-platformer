// import { PlaneCoordinates } from '../types/PlaneCoordinates';

export interface WorldProps {
	container: HTMLElement | Document
}

export default class World {

	container;

	constructor(props: WorldProps) {
		this.container = props.container
	}

	render() {

		const basePlate = document.createElement('div')
		basePlate.style.width = '100%'
		basePlate.style.height = '2px'
		basePlate.style.position = 'absolute'
		basePlate.style.bottom = '200px'
		basePlate.style.left = '0'
		basePlate.style.background = 'black'

		this.container.appendChild(basePlate)

		return {
			element: basePlate,
			coords: basePlate.getBoundingClientRect()
		}
	}
}
