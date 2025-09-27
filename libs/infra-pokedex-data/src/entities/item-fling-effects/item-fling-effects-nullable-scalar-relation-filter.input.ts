import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlingEffectsWhereInput } from './item-fling-effects-where.input';

@InputType()
export class ItemFlingEffectsNullableScalarRelationFilter {

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    is?: ItemFlingEffectsWhereInput;

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    isNot?: ItemFlingEffectsWhereInput;
}
