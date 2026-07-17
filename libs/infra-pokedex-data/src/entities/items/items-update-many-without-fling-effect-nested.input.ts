import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutFlingEffectInput } from './items-create-without-fling-effect.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutFlingEffectInput } from './items-create-or-connect-without-fling-effect.input';
import { ItemsUpsertWithWhereUniqueWithoutFlingEffectInput } from './items-upsert-with-where-unique-without-fling-effect.input';
import type { Identity } from 'identity-type';
import { ItemsCreateManyFlingEffectInputEnvelope } from './items-create-many-fling-effect-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateWithWhereUniqueWithoutFlingEffectInput } from './items-update-with-where-unique-without-fling-effect.input';
import { ItemsUpdateManyWithWhereWithoutFlingEffectInput } from './items-update-many-with-where-without-fling-effect.input';
import { ItemsScalarWhereInput } from './items-scalar-where.input';

@InputType()
export class ItemsUpdateManyWithoutFlingEffectNestedInput {

    @Field(() => [ItemsCreateWithoutFlingEffectInput], {nullable:true})
    @Type(() => ItemsCreateWithoutFlingEffectInput)
    create?: Array<ItemsCreateWithoutFlingEffectInput>;

    @Field(() => [ItemsCreateOrConnectWithoutFlingEffectInput], {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutFlingEffectInput)
    connectOrCreate?: Array<ItemsCreateOrConnectWithoutFlingEffectInput>;

    @Field(() => [ItemsUpsertWithWhereUniqueWithoutFlingEffectInput], {nullable:true})
    @Type(() => ItemsUpsertWithWhereUniqueWithoutFlingEffectInput)
    upsert?: Array<ItemsUpsertWithWhereUniqueWithoutFlingEffectInput>;

    @Field(() => ItemsCreateManyFlingEffectInputEnvelope, {nullable:true})
    @Type(() => ItemsCreateManyFlingEffectInputEnvelope)
    createMany?: Identity<ItemsCreateManyFlingEffectInputEnvelope>;

    @Field(() => [ItemsWhereUniqueInput], {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>>;

    @Field(() => [ItemsWhereUniqueInput], {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>>;

    @Field(() => [ItemsWhereUniqueInput], {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>>;

    @Field(() => [ItemsWhereUniqueInput], {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>>;

    @Field(() => [ItemsUpdateWithWhereUniqueWithoutFlingEffectInput], {nullable:true})
    @Type(() => ItemsUpdateWithWhereUniqueWithoutFlingEffectInput)
    update?: Array<ItemsUpdateWithWhereUniqueWithoutFlingEffectInput>;

    @Field(() => [ItemsUpdateManyWithWhereWithoutFlingEffectInput], {nullable:true})
    @Type(() => ItemsUpdateManyWithWhereWithoutFlingEffectInput)
    updateMany?: Array<ItemsUpdateManyWithWhereWithoutFlingEffectInput>;

    @Field(() => [ItemsScalarWhereInput], {nullable:true})
    @Type(() => ItemsScalarWhereInput)
    deleteMany?: Array<ItemsScalarWhereInput>;
}
