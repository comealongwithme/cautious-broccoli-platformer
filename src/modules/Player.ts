import World from './World';

export default class Player {

	timer: any;
	// @ts-ignore
	body: HTMLElement
	world: World
	bodyPosition: {
		x: number,
		y: number
	}

	constructor(props: { world: World }) {
		this.world = props.world
	}

	updatePosition() {
		console.log('[Player]: Position updated!');
	}

	createTimer() {
		this.timer = setInterval(() => {
			this.updatePosition()
		}, 60);
	}

	jump() {
		let newYPosition;
		newYPosition = this.bodyPosition.y - 50;
		this.body.style.transform = `translate(${this.bodyPosition.x}px, ${newYPosition}px)`
		this.bodyPosition.y = newYPosition
	}

	addControls() {
		document.addEventListener('keydown', (e) => {
			let newXPosition;
			let newYPosition;
			switch ((e as KeyboardEvent).key) {
				case 'ArrowLeft':
					newXPosition = this.bodyPosition.x - 10;
					this.body.style.transform = `translate(${newXPosition}px, ${this.bodyPosition.y}px)`
					this.bodyPosition.x = newXPosition

					console.log('[Player]: Arrow left');
					break;

				case 'ArrowUp':
					this.jump()

					console.log('[Player]: Arrow up');
					break;

				case 'ArrowRight':
					newXPosition = this.bodyPosition.x + 10;
					this.body.style.transform = `translate(${newXPosition}px, ${this.bodyPosition.y}px)`
					this.bodyPosition.x = newXPosition

					console.log('[Player]: Arrow right');
					break;

				case 'ArrowDown':
					newYPosition = this.bodyPosition.y + 10;
					this.body.style.transform = `translate(${this.bodyPosition.x}px, ${newYPosition}px)`
					this.bodyPosition.y = newYPosition

					console.log('[Player]: Arrow down');
					break;
			}
		})
	}

	spawn() {

		if (this.body) {
			return
		}

		this.body = document.createElement('div')
		this.body.style.background = 'red'
		this.body.style.width = '100px'
		this.body.style.height = '200px'
		this.body.style.transition = '.2s ease-in-out'

		this.bodyPosition = {
			x: 0,
			y: 0
		}

		this.world.container.appendChild(this.body)

		this.addControls()
	}
}
