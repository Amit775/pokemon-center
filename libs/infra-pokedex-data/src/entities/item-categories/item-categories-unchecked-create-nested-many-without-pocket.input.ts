import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCategoriesCreateWithoutPocketInput } from './item-categories-create-without-pocket.input';
import { Type } from 'class-transformer';
import { ItemCategoriesCreateOrConnectWithoutPocketInput } from './item-categories-create-or-connect-without-pocket.input';
import type { Identity } from 'identity-type';
import { ItemCategoriesCreateManyPocketInputEnvelope } from './item-categories-create-many-pocket-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemCategoriesWhereUniqueInput } from './item-categories-where-unique.input';

@InputType()
export class ItemCategoriesUncheckedCreateNestedManyWithoutPocketInput {

    @Field(() => [ItemCategoriesCreateWithoutPocketInput], {nullable:true})
    @Type(() => ItemCategoriesCreateWithoutPocketInput)
    create?: Array<ItemCategoriesCreateWithoutPocketInput>;

    @Field(() => [ItemCategoriesCreateOrConnectWithoutPocketInput], {nullable:true})
    @Type(() => ItemCategoriesCreateOrConnectWithoutPocketInput)
    connectOrCreate?: Array<ItemCategoriesCreateOrConnectWithoutPocketInput>;

    @Field(() => ItemCategoriesCreateManyPocketInputEnvelope, {nullable:true})
    @Type(() => ItemCategoriesCreateManyPocketInputEnvelope)
    createMany?: Identity<ItemCategoriesCreateManyPocketInputEnvelope>;

    @Field(() => [ItemCategoriesWhereUniqueInput], {nullable:true})
    @Type(() => ItemCategoriesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>>;
}
