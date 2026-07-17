import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlingEffectsUpdateInput } from './item-fling-effects-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlingEffectsWhereUniqueInput } from './item-fling-effects-where-unique.input';

@ArgsType()
export class UpdateOneItemFlingEffectsArgs {

    @Field(() => ItemFlingEffectsUpdateInput, {nullable:false})
    @Type(() => ItemFlingEffectsUpdateInput)
    data!: Identity<ItemFlingEffectsUpdateInput>;

    @Field(() => ItemFlingEffectsWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlingEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlingEffectsWhereUniqueInput, 'id'>;
}
