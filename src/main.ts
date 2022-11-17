import './style.css'

import World from './modules/World';
import Player from './modules/Player';

const world = new World({
	container: document.getElementById('app') as HTMLElement
})

const worldPosition = world.render();

const PlayerEntity = new Player({world})

PlayerEntity.spawn()
