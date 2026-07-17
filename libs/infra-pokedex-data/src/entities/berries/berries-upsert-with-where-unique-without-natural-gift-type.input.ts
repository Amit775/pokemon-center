import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { BerriesUpdateWithoutNaturalGiftTypeInput } from './berries-update-without-natural-gift-type.input';
import { BerriesCreateWithoutNaturalGiftTypeInput } from './berries-create-without-natural-gift-type.input';

@InputType()
export class BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput {

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesUpdateWithoutNaturalGiftTypeInput, {nullable:false})
    @Type(() => BerriesUpdateWithoutNaturalGiftTypeInput)
    update!: Identity<BerriesUpdateWithoutNaturalGiftTypeInput>;

    @Field(() => BerriesCreateWithoutNaturalGiftTypeInput, {nullable:false})
    @Type(() => BerriesCreateWithoutNaturalGiftTypeInput)
    create!: Identity<BerriesCreateWithoutNaturalGiftTypeInput>;
}
