import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Poemes extends BaseSchema {
	protected tableName = 'poemes'

	public async up() {
		this.schema.table(this.tableName, (table) => {
			table.integer('picture_id').unsigned().references('id').inTable('pictures').onDelete('cascade')
		})
	}

	public async down() {
		this.schema.table(this.tableName, (table) => {
			table.dropColumn('picture_id')
		})
	}
}
