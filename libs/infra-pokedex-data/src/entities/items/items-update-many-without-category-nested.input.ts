import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutCategoryInput } from './items-create-without-category.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutCategoryInput } from './items-create-or-connect-without-category.input';
import { ItemsUpsertWithWhereUniqueWithoutCategoryInput } from './items-upsert-with-where-unique-without-category.input';
import { ItemsCreateManyCategoryInputEnvelope } from './items-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateWithWhereUniqueWithoutCategoryInput } from './items-update-with-where-unique-without-category.input';
import { ItemsUpdateManyWithWhereWithoutCategoryInput } from './items-update-many-with-where-without-category.input';
import { ItemsScalarWhereInput } from './items-scalar-where.input';

@InputType()
export class ItemsUpdateManyWithoutCategoryNestedInput {

    @Field(() => [ItemsCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ItemsCreateWithoutCategoryInput)
    create?: Array<ItemsCreateWithoutCategoryInput>;

    @Field(() => [ItemsCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ItemsCreateOrConnectWithoutCategoryInput>;

    @Field(() => [ItemsUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ItemsUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<ItemsUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => ItemsCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ItemsCreateManyCategoryInputEnvelope)
    createMany?: ItemsCreateManyCategoryInputEnvelope;

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

    @Field(() => [ItemsUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ItemsUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<ItemsUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [ItemsUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => ItemsUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<ItemsUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [ItemsScalarWhereInput], {nullable:true})
    @Type(() => ItemsScalarWhereInput)
    deleteMany?: Array<ItemsScalarWhereInput>;
}
