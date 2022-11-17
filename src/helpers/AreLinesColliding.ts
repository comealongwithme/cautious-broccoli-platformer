export default function AreLinesColliding(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) {
	let uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
	let uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
	if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
		let intersectionX = x1 + (uA * (x2 - x1));
		let intersectionY = y1 + (uA * (y2 - y1));
		return [true, intersectionX, intersectionY];
	}
	return [false, 0, 0]
}
