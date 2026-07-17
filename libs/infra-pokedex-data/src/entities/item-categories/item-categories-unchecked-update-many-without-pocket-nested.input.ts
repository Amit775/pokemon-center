import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCategoriesCreateWithoutPocketInput } from './item-categories-create-without-pocket.input';
import { Type } from 'class-transformer';
import { ItemCategoriesCreateOrConnectWithoutPocketInput } from './item-categories-create-or-connect-without-pocket.input';
import { ItemCategoriesUpsertWithWhereUniqueWithoutPocketInput } from './item-categories-upsert-with-where-unique-without-pocket.input';
import { ItemCategoriesCreateManyPocketInputEnvelope } from './item-categories-create-many-pocket-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ItemCategoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { ItemCategoriesUpdateWithWhereUniqueWithoutPocketInput } from './item-categories-update-with-where-unique-without-pocket.input';
import { ItemCategoriesUpdateManyWithWhereWithoutPocketInput } from './item-categories-update-many-with-where-without-pocket.input';
import { ItemCategoriesScalarWhereInput } from './item-categories-scalar-where.input';

@InputType()
export class ItemCategoriesUncheckedUpdateManyWithoutPocketNestedInput {

    @Field(() => [ItemCategoriesCreateWithoutPocketInput], {nullable:true})
    @Type(() => ItemCategoriesCreateWithoutPocketInput)
    create?: Array<ItemCategoriesCreateWithoutPocketInput>;

    @Field(() => [ItemCategoriesCreateOrConnectWithoutPocketInput], {nullable:true})
    @Type(() => ItemCategoriesCreateOrConnectWithoutPocketInput)
    connectOrCreate?: Array<ItemCategoriesCreateOrConnectWithoutPocketInput>;

    @Field(() => [ItemCategoriesUpsertWithWhereUniqueWithoutPocketInput], {nullable:true})
    @Type(() => ItemCategoriesUpsertWithWhereUniqueWithoutPocketInput)
    upsert?: Array<ItemCategoriesUpsertWithWhereUniqueWithoutPocketInput>;

    @Field(() => ItemCategoriesCreateManyPocketInputEnvelope, {nullable:true})
    @Type(() => ItemCategoriesCreateManyPocketInputEnvelope)
    createMany?: ItemCategoriesCreateManyPocketInputEnvelope;

    @Field(() => [ItemCategoriesWhereUniqueInput], {nullable:true})
    @Type(() => ItemCategoriesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>>;

    @Field(() => [ItemCategoriesWhereUniqueInput], {nullable:true})
    @Type(() => ItemCategoriesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>>;

    @Field(() => [ItemCategoriesWhereUniqueInput], {nullable:true})
    @Type(() => ItemCategoriesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>>;

    @Field(() => [ItemCategoriesWhereUniqueInput], {nullable:true})
    @Type(() => ItemCategoriesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>>;

    @Field(() => [ItemCategoriesUpdateWithWhereUniqueWithoutPocketInput], {nullable:true})
    @Type(() => ItemCategoriesUpdateWithWhereUniqueWithoutPocketInput)
    update?: Array<ItemCategoriesUpdateWithWhereUniqueWithoutPocketInput>;

    @Field(() => [ItemCategoriesUpdateManyWithWhereWithoutPocketInput], {nullable:true})
    @Type(() => ItemCategoriesUpdateManyWithWhereWithoutPocketInput)
    updateMany?: Array<ItemCategoriesUpdateManyWithWhereWithoutPocketInput>;

    @Field(() => [ItemCategoriesScalarWhereInput], {nullable:true})
    @Type(() => ItemCategoriesScalarWhereInput)
    deleteMany?: Array<ItemCategoriesScalarWhereInput>;
}
