import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlingEffectsCreateWithoutItemsInput } from './item-fling-effects-create-without-items.input';
import { Type } from 'class-transformer';
import { ItemFlingEffectsCreateOrConnectWithoutItemsInput } from './item-fling-effects-create-or-connect-without-items.input';
import { Prisma } from '@prisma/client';
import { ItemFlingEffectsWhereUniqueInput } from './item-fling-effects-where-unique.input';

@InputType()
export class ItemFlingEffectsCreateNestedOneWithoutItemsInput {

    @Field(() => ItemFlingEffectsCreateWithoutItemsInput, {nullable:true})
    @Type(() => ItemFlingEffectsCreateWithoutItemsInput)
    create?: ItemFlingEffectsCreateWithoutItemsInput;

    @Field(() => ItemFlingEffectsCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => ItemFlingEffectsCreateOrConnectWithoutItemsInput)
    connectOrCreate?: ItemFlingEffectsCreateOrConnectWithoutItemsInput;

    @Field(() => ItemFlingEffectsWhereUniqueInput, {nullable:true})
    @Type(() => ItemFlingEffectsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemFlingEffectsWhereUniqueInput, 'id'>;
}
