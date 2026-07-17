import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { BerriesCreateWithoutItemInput } from './berries-create-without-item.input';

@InputType()
export class BerriesCreateOrConnectWithoutItemInput {

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesCreateWithoutItemInput, {nullable:false})
    @Type(() => BerriesCreateWithoutItemInput)
    create!: BerriesCreateWithoutItemInput;
}
