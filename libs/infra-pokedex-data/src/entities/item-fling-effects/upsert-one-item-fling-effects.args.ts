import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlingEffectsWhereUniqueInput } from './item-fling-effects-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemFlingEffectsCreateInput } from './item-fling-effects-create.input';
import { ItemFlingEffectsUpdateInput } from './item-fling-effects-update.input';

@ArgsType()
export class UpsertOneItemFlingEffectsArgs {

    @Field(() => ItemFlingEffectsWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlingEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlingEffectsWhereUniqueInput, 'id'>;

    @Field(() => ItemFlingEffectsCreateInput, {nullable:false})
    @Type(() => ItemFlingEffectsCreateInput)
    create!: Identity<ItemFlingEffectsCreateInput>;

    @Field(() => ItemFlingEffectsUpdateInput, {nullable:false})
    @Type(() => ItemFlingEffectsUpdateInput)
    update!: Identity<ItemFlingEffectsUpdateInput>;
}
