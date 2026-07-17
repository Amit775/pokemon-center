import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { BerriesUpdateWithoutItemInput } from './berries-update-without-item.input';
import { BerriesCreateWithoutItemInput } from './berries-create-without-item.input';

@InputType()
export class BerriesUpsertWithWhereUniqueWithoutItemInput {

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesUpdateWithoutItemInput, {nullable:false})
    @Type(() => BerriesUpdateWithoutItemInput)
    update!: Identity<BerriesUpdateWithoutItemInput>;

    @Field(() => BerriesCreateWithoutItemInput, {nullable:false})
    @Type(() => BerriesCreateWithoutItemInput)
    create!: Identity<BerriesCreateWithoutItemInput>;
}
