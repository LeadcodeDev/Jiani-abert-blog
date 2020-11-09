import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Book from 'App/Models/Book'

export default class BookSeeder extends BaseSeeder {
  public async run () {
    await Book.createMany([

      {
        label: "Les misérables",
        description: " Voici un poème de victor Hugo",
        reduced: false,
        visible: true,
      }
  ]) 
  }
}
