export class Episode {

	/** Class attribute description. */
	private _uid: string;
	set uid(_uid: string) { this._uid = _uid };
	get uid(): string { return this._uid };	

	/** Class attribute description. */
	private _title: string;
	set title(_title: string) { this._title = _title };
	get title(): string { return this._title };

	/** Class attribute description. */
	private _date: Date | undefined;
	set date(_date: Date | undefined) { this._date = _date };
	get date(): Date | undefined { return this._date };

	/** Class attribute description. */
	private _description: string;
	set description(_description: string) { this._description = _description };
	get description(): string { return this._description };

	constructor() {
		this._uid = '';
		this._title = '';
		this._date = undefined;
		this._description = '';
	}
}