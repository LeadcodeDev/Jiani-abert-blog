import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Books extends BaseSchema {
	protected tableName = 'books'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id').primary()
			table.string('label').notNullable()
			table.text('description').notNullable()
			table.boolean('visible').defaultTo(false)
			table.boolean('reduced').defaultTo(false)
			table.timestamps(true, true)
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
