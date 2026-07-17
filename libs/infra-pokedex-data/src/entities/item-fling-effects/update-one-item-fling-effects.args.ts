import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlingEffectsUpdateInput } from './item-fling-effects-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ItemFlingEffectsWhereUniqueInput } from './item-fling-effects-where-unique.input';

@ArgsType()
export class UpdateOneItemFlingEffectsArgs {

    @Field(() => ItemFlingEffectsUpdateInput, {nullable:false})
    @Type(() => ItemFlingEffectsUpdateInput)
    data!: ItemFlingEffectsUpdateInput;

    @Field(() => ItemFlingEffectsWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlingEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlingEffectsWhereUniqueInput, 'id'>;
}
