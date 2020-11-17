import BaseSchema from '@ioc:Adonis/Lucid/Schema'
export default class Chapters extends BaseSchema {
	protected tableName = 'chapters'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id').primary()
			table.string('title', 180).nullable().defaultTo('')
			table.string('content', 180).notNullable()
			table.dateTime('published_at').nullable()
			table.timestamps(true, true)
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
