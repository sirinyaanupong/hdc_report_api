module.exports = {
	getSys_reportById: function(db, id){
		return db('sys_report')
			.select('source_table')
			.where('id', id);
	},
};