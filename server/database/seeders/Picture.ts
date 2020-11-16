import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Picture from 'App/Models/Picture'

export default class PictureSeeder extends BaseSeeder {
	public async run() {
		await Picture.createMany([
			{
				filename: '2020-11-13T12:00:00',
				label: 'Panda.png'
			}
		])
	}
}
