import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Article from 'App/Models/Article'

export default class ArticleSeeder extends BaseSeeder {
  public async run () {
    await Article.createMany([

        {
          title: "Les misérables",
          content: " Voici un poème de victor Hugo",
        }

    ]) 
  }
}
