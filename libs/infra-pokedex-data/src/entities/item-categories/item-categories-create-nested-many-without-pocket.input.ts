import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCategoriesCreateWithoutPocketInput } from './item-categories-create-without-pocket.input';
import { Type } from 'class-transformer';
import { ItemCategoriesCreateOrConnectWithoutPocketInput } from './item-categories-create-or-connect-without-pocket.input';
import { ItemCategoriesCreateManyPocketInputEnvelope } from './item-categories-create-many-pocket-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ItemCategoriesWhereUniqueInput } from './item-categories-where-unique.input';

@InputType()
export class ItemCategoriesCreateNestedManyWithoutPocketInput {

    @Field(() => [ItemCategoriesCreateWithoutPocketInput], {nullable:true})
    @Type(() => ItemCategoriesCreateWithoutPocketInput)
    create?: Array<ItemCategoriesCreateWithoutPocketInput>;

    @Field(() => [ItemCategoriesCreateOrConnectWithoutPocketInput], {nullable:true})
    @Type(() => ItemCategoriesCreateOrConnectWithoutPocketInput)
    connectOrCreate?: Array<ItemCategoriesCreateOrConnectWithoutPocketInput>;

    @Field(() => ItemCategoriesCreateManyPocketInputEnvelope, {nullable:true})
    @Type(() => ItemCategoriesCreateManyPocketInputEnvelope)
    createMany?: ItemCategoriesCreateManyPocketInputEnvelope;

    @Field(() => [ItemCategoriesWhereUniqueInput], {nullable:true})
    @Type(() => ItemCategoriesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>>;
}
