import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsWhereInput } from './version-group-pokemon-move-methods-where.input';
import { Type } from 'class-transformer';
import { VersionGroupPokemonMoveMethodsOrderByWithAggregationInput } from './version-group-pokemon-move-methods-order-by-with-aggregation.input';
import { VersionGroupPokemonMoveMethodsScalarFieldEnum } from './version-group-pokemon-move-methods-scalar-field.enum';
import { VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput } from './version-group-pokemon-move-methods-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsCountAggregateInput } from './version-group-pokemon-move-methods-count-aggregate.input';
import { VersionGroupPokemonMoveMethodsAvgAggregateInput } from './version-group-pokemon-move-methods-avg-aggregate.input';
import { VersionGroupPokemonMoveMethodsSumAggregateInput } from './version-group-pokemon-move-methods-sum-aggregate.input';
import { VersionGroupPokemonMoveMethodsMinAggregateInput } from './version-group-pokemon-move-methods-min-aggregate.input';
import { VersionGroupPokemonMoveMethodsMaxAggregateInput } from './version-group-pokemon-move-methods-max-aggregate.input';

@ArgsType()
export class VersionGroupPokemonMoveMethodsGroupByArgs {

    @Field(() => VersionGroupPokemonMoveMethodsWhereInput, {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsWhereInput)
    where?: VersionGroupPokemonMoveMethodsWhereInput;

    @Field(() => [VersionGroupPokemonMoveMethodsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VersionGroupPokemonMoveMethodsOrderByWithAggregationInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsScalarFieldEnum], {nullable:false})
    by!: Array<`${VersionGroupPokemonMoveMethodsScalarFieldEnum}`>;

    @Field(() => VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput, {nullable:true})
    having?: VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VersionGroupPokemonMoveMethodsCountAggregateInput, {nullable:true})
    _count?: VersionGroupPokemonMoveMethodsCountAggregateInput;

    @Field(() => VersionGroupPokemonMoveMethodsAvgAggregateInput, {nullable:true})
    _avg?: VersionGroupPokemonMoveMethodsAvgAggregateInput;

    @Field(() => VersionGroupPokemonMoveMethodsSumAggregateInput, {nullable:true})
    _sum?: VersionGroupPokemonMoveMethodsSumAggregateInput;

    @Field(() => VersionGroupPokemonMoveMethodsMinAggregateInput, {nullable:true})
    _min?: VersionGroupPokemonMoveMethodsMinAggregateInput;

    @Field(() => VersionGroupPokemonMoveMethodsMaxAggregateInput, {nullable:true})
    _max?: VersionGroupPokemonMoveMethodsMaxAggregateInput;
}
