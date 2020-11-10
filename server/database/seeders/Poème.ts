import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Poème from 'App/Models/Poème'

export default class PoèmeSeeder extends BaseSeeder {
	public async run() {
		await Poème.createMany([
			{
				title: 'Les misérables',
				content: ' Voici un poème de victor Hugo'
			}
		])
	}
}
