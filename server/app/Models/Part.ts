import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Chapter from 'App/Models/Chapter'

export default class Part extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
	@column()
	public label: string

	@column()
  public description: string
  
  @column()
  public bookId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Chapter)
  public chapters: HasMany<typeof Chapter>
}
