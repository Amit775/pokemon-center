import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { BerriesUpdateWithoutNaturalGiftTypeInput } from './berries-update-without-natural-gift-type.input';

@InputType()
export class BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput {

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesUpdateWithoutNaturalGiftTypeInput, {nullable:false})
    @Type(() => BerriesUpdateWithoutNaturalGiftTypeInput)
    data!: Identity<BerriesUpdateWithoutNaturalGiftTypeInput>;
}
