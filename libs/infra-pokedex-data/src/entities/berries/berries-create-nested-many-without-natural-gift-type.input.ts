import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerriesCreateWithoutNaturalGiftTypeInput } from './berries-create-without-natural-gift-type.input';
import { Type } from 'class-transformer';
import { BerriesCreateOrConnectWithoutNaturalGiftTypeInput } from './berries-create-or-connect-without-natural-gift-type.input';
import { BerriesCreateManyNaturalGiftTypeInputEnvelope } from './berries-create-many-natural-gift-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';

@InputType()
export class BerriesCreateNestedManyWithoutNaturalGiftTypeInput {

    @Field(() => [BerriesCreateWithoutNaturalGiftTypeInput], {nullable:true})
    @Type(() => BerriesCreateWithoutNaturalGiftTypeInput)
    create?: Array<BerriesCreateWithoutNaturalGiftTypeInput>;

    @Field(() => [BerriesCreateOrConnectWithoutNaturalGiftTypeInput], {nullable:true})
    @Type(() => BerriesCreateOrConnectWithoutNaturalGiftTypeInput)
    connectOrCreate?: Array<BerriesCreateOrConnectWithoutNaturalGiftTypeInput>;

    @Field(() => BerriesCreateManyNaturalGiftTypeInputEnvelope, {nullable:true})
    @Type(() => BerriesCreateManyNaturalGiftTypeInputEnvelope)
    createMany?: BerriesCreateManyNaturalGiftTypeInputEnvelope;

    @Field(() => [BerriesWhereUniqueInput], {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>>;
}
