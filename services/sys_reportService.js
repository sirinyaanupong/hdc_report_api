module.exports = {
	getResultByYear: function(db, tableName, year){
		console.log('query: '+db(tableName)
			.select()
			.where('b_year', year).toString());

		return db(tableName)
			.select()
			.where('b_year', year)
			.limit(5);
	},
};