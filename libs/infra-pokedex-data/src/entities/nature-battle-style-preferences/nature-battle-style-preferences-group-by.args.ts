import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesWhereInput } from './nature-battle-style-preferences-where.input';
import { Type } from 'class-transformer';
import { NatureBattleStylePreferencesOrderByWithAggregationInput } from './nature-battle-style-preferences-order-by-with-aggregation.input';
import { NatureBattleStylePreferencesScalarFieldEnum } from './nature-battle-style-preferences-scalar-field.enum';
import { NatureBattleStylePreferencesScalarWhereWithAggregatesInput } from './nature-battle-style-preferences-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NatureBattleStylePreferencesCountAggregateInput } from './nature-battle-style-preferences-count-aggregate.input';
import { NatureBattleStylePreferencesAvgAggregateInput } from './nature-battle-style-preferences-avg-aggregate.input';
import { NatureBattleStylePreferencesSumAggregateInput } from './nature-battle-style-preferences-sum-aggregate.input';
import { NatureBattleStylePreferencesMinAggregateInput } from './nature-battle-style-preferences-min-aggregate.input';
import { NatureBattleStylePreferencesMaxAggregateInput } from './nature-battle-style-preferences-max-aggregate.input';

@ArgsType()
export class NatureBattleStylePreferencesGroupByArgs {

    @Field(() => NatureBattleStylePreferencesWhereInput, {nullable:true})
    @Type(() => NatureBattleStylePreferencesWhereInput)
    where?: NatureBattleStylePreferencesWhereInput;

    @Field(() => [NatureBattleStylePreferencesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NatureBattleStylePreferencesOrderByWithAggregationInput>;

    @Field(() => [NatureBattleStylePreferencesScalarFieldEnum], {nullable:false})
    by!: Array<`${NatureBattleStylePreferencesScalarFieldEnum}`>;

    @Field(() => NatureBattleStylePreferencesScalarWhereWithAggregatesInput, {nullable:true})
    having?: NatureBattleStylePreferencesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NatureBattleStylePreferencesCountAggregateInput, {nullable:true})
    _count?: NatureBattleStylePreferencesCountAggregateInput;

    @Field(() => NatureBattleStylePreferencesAvgAggregateInput, {nullable:true})
    _avg?: NatureBattleStylePreferencesAvgAggregateInput;

    @Field(() => NatureBattleStylePreferencesSumAggregateInput, {nullable:true})
    _sum?: NatureBattleStylePreferencesSumAggregateInput;

    @Field(() => NatureBattleStylePreferencesMinAggregateInput, {nullable:true})
    _min?: NatureBattleStylePreferencesMinAggregateInput;

    @Field(() => NatureBattleStylePreferencesMaxAggregateInput, {nullable:true})
    _max?: NatureBattleStylePreferencesMaxAggregateInput;
}
