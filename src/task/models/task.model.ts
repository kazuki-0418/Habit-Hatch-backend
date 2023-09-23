import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Status } from '@prisma/client'

@ObjectType()
export class Task {
  @Field(() => Int)
  id: number

  @Field()
  title: string

  @Field({ nullable: true })
  description: string

  @Field()
  status: Status

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
