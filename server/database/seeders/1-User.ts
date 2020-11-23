import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
	public async run() {
		await User.create({
			firstname: 'jiani',
			lastname: 'abert',
			email: 'jianiabert@orange.fr',
			password: 'ajibiearnti',
			description: 'Poète et bien des choses'
		})
	}
}
