import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Parts extends BaseSchema {
  protected tableName = 'parts'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('book_id').unsigned().references('id').inTable('books').onDelete('cascade')
    })
  }
  
  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('book_id')
    })
  }
}
