import { Field, InputType, Int } from '@nestjs/graphql'
import { Status } from '@prisma/client'
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'

@InputType()
export class UpdateTaskInput {
  @Field(() => Int)
  id: number

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  title?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  @IsEnum(Status)
  @IsOptional()
  status?: Status
}
