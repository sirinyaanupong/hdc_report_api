module.exports = {
	getResultByYear: function(db, tableName, year){
		return db(tableName)
			.select()
			.where('b_year', year);
	},
};