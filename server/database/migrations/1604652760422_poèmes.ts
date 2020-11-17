import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Poème extends BaseSchema {
	protected tableName = 'poemes'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id').primary()
			table.string('title').notNullable()
			table.text('content').notNullable()
			table.timestamps(true, true)
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
