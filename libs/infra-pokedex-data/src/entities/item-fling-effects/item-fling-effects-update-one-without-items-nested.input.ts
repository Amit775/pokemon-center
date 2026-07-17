import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlingEffectsCreateWithoutItemsInput } from './item-fling-effects-create-without-items.input';
import { Type } from 'class-transformer';
import { ItemFlingEffectsCreateOrConnectWithoutItemsInput } from './item-fling-effects-create-or-connect-without-items.input';
import { ItemFlingEffectsUpsertWithoutItemsInput } from './item-fling-effects-upsert-without-items.input';
import { ItemFlingEffectsWhereInput } from './item-fling-effects-where.input';
import { Prisma } from '@prisma/client';
import { ItemFlingEffectsWhereUniqueInput } from './item-fling-effects-where-unique.input';
import { ItemFlingEffectsUpdateToOneWithWhereWithoutItemsInput } from './item-fling-effects-update-to-one-with-where-without-items.input';

@InputType()
export class ItemFlingEffectsUpdateOneWithoutItemsNestedInput {

    @Field(() => ItemFlingEffectsCreateWithoutItemsInput, {nullable:true})
    @Type(() => ItemFlingEffectsCreateWithoutItemsInput)
    create?: ItemFlingEffectsCreateWithoutItemsInput;

    @Field(() => ItemFlingEffectsCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => ItemFlingEffectsCreateOrConnectWithoutItemsInput)
    connectOrCreate?: ItemFlingEffectsCreateOrConnectWithoutItemsInput;

    @Field(() => ItemFlingEffectsUpsertWithoutItemsInput, {nullable:true})
    @Type(() => ItemFlingEffectsUpsertWithoutItemsInput)
    upsert?: ItemFlingEffectsUpsertWithoutItemsInput;

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    @Type(() => ItemFlingEffectsWhereInput)
    disconnect?: ItemFlingEffectsWhereInput;

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    @Type(() => ItemFlingEffectsWhereInput)
    delete?: ItemFlingEffectsWhereInput;

    @Field(() => ItemFlingEffectsWhereUniqueInput, {nullable:true})
    @Type(() => ItemFlingEffectsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemFlingEffectsWhereUniqueInput, 'id'>;

    @Field(() => ItemFlingEffectsUpdateToOneWithWhereWithoutItemsInput, {nullable:true})
    @Type(() => ItemFlingEffectsUpdateToOneWithWhereWithoutItemsInput)
    update?: ItemFlingEffectsUpdateToOneWithWhereWithoutItemsInput;
}
