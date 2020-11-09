import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Parts extends BaseSchema {
  protected tableName = 'parts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
			table.string('label', 180).notNullable()
      table.string('description', 180).notNullable()
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
