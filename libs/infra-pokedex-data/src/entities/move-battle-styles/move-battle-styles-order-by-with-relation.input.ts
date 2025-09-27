import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NatureBattleStylePreferencesOrderByRelationAggregateInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-order-by-relation-aggregate.input';

@InputType()
export class MoveBattleStylesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => NatureBattleStylePreferencesOrderByRelationAggregateInput, {nullable:true})
    naturePreferences?: NatureBattleStylePreferencesOrderByRelationAggregateInput;
}
