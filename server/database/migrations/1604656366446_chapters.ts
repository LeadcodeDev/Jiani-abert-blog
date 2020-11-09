import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Chapters extends BaseSchema {
  protected tableName = 'chapters'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('part_id').unsigned().references('id').inTable('parts').onDelete('cascade')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('part_id')
    })
  }
}
