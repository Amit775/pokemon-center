import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerriesCreateWithoutNaturalGiftTypeInput } from './berries-create-without-natural-gift-type.input';
import { Type } from 'class-transformer';
import { BerriesCreateOrConnectWithoutNaturalGiftTypeInput } from './berries-create-or-connect-without-natural-gift-type.input';
import { BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput } from './berries-upsert-with-where-unique-without-natural-gift-type.input';
import { BerriesCreateManyNaturalGiftTypeInputEnvelope } from './berries-create-many-natural-gift-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput } from './berries-update-with-where-unique-without-natural-gift-type.input';
import { BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput } from './berries-update-many-with-where-without-natural-gift-type.input';
import { BerriesScalarWhereInput } from './berries-scalar-where.input';

@InputType()
export class BerriesUncheckedUpdateManyWithoutNaturalGiftTypeNestedInput {

    @Field(() => [BerriesCreateWithoutNaturalGiftTypeInput], {nullable:true})
    @Type(() => BerriesCreateWithoutNaturalGiftTypeInput)
    create?: Array<BerriesCreateWithoutNaturalGiftTypeInput>;

    @Field(() => [BerriesCreateOrConnectWithoutNaturalGiftTypeInput], {nullable:true})
    @Type(() => BerriesCreateOrConnectWithoutNaturalGiftTypeInput)
    connectOrCreate?: Array<BerriesCreateOrConnectWithoutNaturalGiftTypeInput>;

    @Field(() => [BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput], {nullable:true})
    @Type(() => BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput)
    upsert?: Array<BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput>;

    @Field(() => BerriesCreateManyNaturalGiftTypeInputEnvelope, {nullable:true})
    @Type(() => BerriesCreateManyNaturalGiftTypeInputEnvelope)
    createMany?: BerriesCreateManyNaturalGiftTypeInputEnvelope;

    @Field(() => [BerriesWhereUniqueInput], {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>>;

    @Field(() => [BerriesWhereUniqueInput], {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>>;

    @Field(() => [BerriesWhereUniqueInput], {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>>;

    @Field(() => [BerriesWhereUniqueInput], {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>>;

    @Field(() => [BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput], {nullable:true})
    @Type(() => BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput)
    update?: Array<BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput>;

    @Field(() => [BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput], {nullable:true})
    @Type(() => BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput)
    updateMany?: Array<BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput>;

    @Field(() => [BerriesScalarWhereInput], {nullable:true})
    @Type(() => BerriesScalarWhereInput)
    deleteMany?: Array<BerriesScalarWhereInput>;
}
