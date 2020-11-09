import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Chapter from 'App/Models/Chapter'


export default class ChapterSeeder extends BaseSeeder {
  public async run () {
    await Chapter.createMany([

      {
        title: 'Voici mon 1er chapitre',
        content: 'Voici le content de mon chapitre',
        partId: 1,
      }
    ])
  }
}
