import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StatsOrderByWithRelationInput } from '../stats/stats-order-by-with-relation.input';
import { NatureBattleStylePreferencesOrderByRelationAggregateInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-order-by-relation-aggregate.input';

@InputType()
export class NaturesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    decreased_stat_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    increased_stat_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    hates_flavor_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    likes_flavor_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;

    @Field(() => StatsOrderByWithRelationInput, {nullable:true})
    decreasedStat?: StatsOrderByWithRelationInput;

    @Field(() => StatsOrderByWithRelationInput, {nullable:true})
    increasedStat?: StatsOrderByWithRelationInput;

    @Field(() => NatureBattleStylePreferencesOrderByRelationAggregateInput, {nullable:true})
    battleStylePreferences?: NatureBattleStylePreferencesOrderByRelationAggregateInput;
}
