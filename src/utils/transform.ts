export const TRANSFORM = {

	DATE: {
		getDateFromAPI: (stringDate: string): Date => {
			const _date: string = stringDate.split(' ')[0];
			const _year: number = +(_date.split('-')[0]);
			const _month: number = +(_date.split('-')[1]) - 1;
			const _day: number = +(_date.split('-')[2]);

			const date: Date = new Date(_year, _month, _day);
			return date;
		},

		getCardinalFormattedDate: (date: Date): string => {
			const year: number = date.getFullYear();
			const month: number = date.getMonth();
			const day: number = date.getDate();
			let monthName: string = TRANSFORM.DATE.getMonthName(month);
			let formattedDay: string = TRANSFORM.DATE.getFormattedDay(day);
			let formattedDate: string = `${monthName} ${formattedDay}, ${year}`;
	
			return formattedDate;
		},

		getMonthName(_month: number): string {
			const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			const monthName: string = months[_month];
	
			return monthName;
		},

		getFormattedDay(_day: number): string {
			let _daySuffix: string = '';
	
			if(_day === 1)
				_daySuffix = 'st';
			else if(_day === 2)
				_daySuffix = 'nd';
			else if(_day === 3)
				_daySuffix = 'rd';
			else
				_daySuffix = 'th';
	
			return `${_day}${_daySuffix}`;
		}
	},

};