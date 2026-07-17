import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutFlingEffectInput } from './items-create-without-fling-effect.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutFlingEffectInput } from './items-create-or-connect-without-fling-effect.input';
import type { Identity } from 'identity-type';
import { ItemsCreateManyFlingEffectInputEnvelope } from './items-create-many-fling-effect-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsUncheckedCreateNestedManyWithoutFlingEffectInput {

    @Field(() => [ItemsCreateWithoutFlingEffectInput], {nullable:true})
    @Type(() => ItemsCreateWithoutFlingEffectInput)
    create?: Array<ItemsCreateWithoutFlingEffectInput>;

    @Field(() => [ItemsCreateOrConnectWithoutFlingEffectInput], {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutFlingEffectInput)
    connectOrCreate?: Array<ItemsCreateOrConnectWithoutFlingEffectInput>;

    @Field(() => ItemsCreateManyFlingEffectInputEnvelope, {nullable:true})
    @Type(() => ItemsCreateManyFlingEffectInputEnvelope)
    createMany?: Identity<ItemsCreateManyFlingEffectInputEnvelope>;

    @Field(() => [ItemsWhereUniqueInput], {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>>;
}
