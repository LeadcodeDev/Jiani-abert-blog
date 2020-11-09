import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Part from 'App/Models/Part'

export default class PartSeeder extends BaseSeeder {
  public async run () {
    await Part.createMany([
      {
        label: "1ère partie",
        description: "Voici la 1ère partie",
        bookId: 1
      }
    ]) 
  }
}
