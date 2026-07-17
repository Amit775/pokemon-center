import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { BerriesCreateWithoutNaturalGiftTypeInput } from './berries-create-without-natural-gift-type.input';

@InputType()
export class BerriesCreateOrConnectWithoutNaturalGiftTypeInput {

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesCreateWithoutNaturalGiftTypeInput, {nullable:false})
    @Type(() => BerriesCreateWithoutNaturalGiftTypeInput)
    create!: BerriesCreateWithoutNaturalGiftTypeInput;
}
