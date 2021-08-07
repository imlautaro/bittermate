export class State {
	pending: boolean
	error: string
	success: string
	constructor() {
		this.pending = false
		this.error = ''
		this.success = ''
	}
	reset() {
		this.pending = false
		this.error = ''
		this.success = ''
	}
}
