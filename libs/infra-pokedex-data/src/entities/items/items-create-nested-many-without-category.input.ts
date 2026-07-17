import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutCategoryInput } from './items-create-without-category.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutCategoryInput } from './items-create-or-connect-without-category.input';
import type { Identity } from 'identity-type';
import { ItemsCreateManyCategoryInputEnvelope } from './items-create-many-category-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedManyWithoutCategoryInput {

    @Field(() => [ItemsCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ItemsCreateWithoutCategoryInput)
    create?: Array<ItemsCreateWithoutCategoryInput>;

    @Field(() => [ItemsCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ItemsCreateOrConnectWithoutCategoryInput>;

    @Field(() => ItemsCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ItemsCreateManyCategoryInputEnvelope)
    createMany?: Identity<ItemsCreateManyCategoryInputEnvelope>;

    @Field(() => [ItemsWhereUniqueInput], {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>>;
}
