import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlingEffectsWhereInput } from './item-fling-effects-where.input';

@InputType()
export class ItemFlingEffectsScalarRelationFilter {

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    is?: Identity<ItemFlingEffectsWhereInput>;

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    isNot?: Identity<ItemFlingEffectsWhereInput>;
}
