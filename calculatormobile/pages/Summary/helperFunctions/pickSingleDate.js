export default function pickSingleDate(date) {
	return {
		[date]: {
			customStyles: {
				container: {
					backgroundColor: 'green',
				},
				text: {
					color: 'black',
					fontWeight: 'bold',
				},
			},
		},
	};
}
