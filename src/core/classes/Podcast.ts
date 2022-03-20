export class Podcast {

	/** Class attribute description. */
	private _uid: string;
	set uid(_uid: string) { this._uid = _uid };
	get uid(): string { return this._uid };

	/** Class attribute description. */
	private _name: string;
	set name(_name: string) { this._name = _name };
	get name(): string { return this._name };

	constructor () {
		this._uid = '';
		this._name = '';
	}
}