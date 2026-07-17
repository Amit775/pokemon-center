import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { BerriesUpdateWithoutItemInput } from './berries-update-without-item.input';
import { BerriesCreateWithoutItemInput } from './berries-create-without-item.input';

@InputType()
export class BerriesUpsertWithWhereUniqueWithoutItemInput {

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesUpdateWithoutItemInput, {nullable:false})
    @Type(() => BerriesUpdateWithoutItemInput)
    update!: BerriesUpdateWithoutItemInput;

    @Field(() => BerriesCreateWithoutItemInput, {nullable:false})
    @Type(() => BerriesCreateWithoutItemInput)
    create!: BerriesCreateWithoutItemInput;
}
