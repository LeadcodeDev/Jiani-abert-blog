import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Chapter from 'App/Models/Chapter'
import { DateTime } from 'luxon'

export default class ChapterSeeder extends BaseSeeder {
	public async run() {
		await Chapter.createMany([
			{
				title: 'Voici mon 1er chapitre',
				content: 'Voici le content de mon chapitre',
				partId: 1,
				publishedAt: DateTime.fromJSDate(new Date())
			}
		])
	}
}
