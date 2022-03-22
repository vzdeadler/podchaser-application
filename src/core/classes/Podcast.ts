import { Episode } from "./Epidose";

export class Podcast {

	/** Class attribute description. */
	private _uid: number;
	set uid(_uid: number) { this._uid = _uid };
	get uid(): number { return this._uid };

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

	/** Class attribute description. */
	private _image: string;
	set image(_image: string) { this._image = _image };
	get image(): string { return this._image };

	/** Class attribute description. */
	private _episodesNumber: number;
	set episodesNumber(_episodesNumber: number) { this._episodesNumber = _episodesNumber };
	get episodesNumber(): number { return this._episodesNumber };

	/** Class attribute description. */
	private _rating: number;
	set rating(_rating: number) { this._rating = _rating };
	get rating(): number { return this._rating };

	/** Class attribute description. */
	private _ratingCount: number;
	set ratingCount(_ratingCount: number) { this._ratingCount = _ratingCount };
	get ratingCount(): number { return this._ratingCount };

	/** Class attribute description. */
	private _episodes: Episode[];
	set episodes(_episodes: Episode[]) { this._episodes = _episodes };
	get episodes(): Episode[] { return this._episodes };

	constructor () {
		this._uid = -1;
		this._title = '';
		this._date = undefined;
		this._description = '';
		this._image = '';
		this._episodesNumber = -1;
		this._rating = -1;
		this._ratingCount = -1;
		this._episodes = [];
	}
}