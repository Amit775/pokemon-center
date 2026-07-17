import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonGameIndicesWhereInput } from './pokemon-game-indices-where.input';
import { Type } from 'class-transformer';
import { PokemonGameIndicesOrderByWithAggregationInput } from './pokemon-game-indices-order-by-with-aggregation.input';
import { PokemonGameIndicesScalarFieldEnum } from './pokemon-game-indices-scalar-field.enum';
import { PokemonGameIndicesScalarWhereWithAggregatesInput } from './pokemon-game-indices-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonGameIndicesCountAggregateInput } from './pokemon-game-indices-count-aggregate.input';
import { PokemonGameIndicesAvgAggregateInput } from './pokemon-game-indices-avg-aggregate.input';
import { PokemonGameIndicesSumAggregateInput } from './pokemon-game-indices-sum-aggregate.input';
import { PokemonGameIndicesMinAggregateInput } from './pokemon-game-indices-min-aggregate.input';
import { PokemonGameIndicesMaxAggregateInput } from './pokemon-game-indices-max-aggregate.input';

@ArgsType()
export class PokemonGameIndicesGroupByArgs {

    @Field(() => PokemonGameIndicesWhereInput, {nullable:true})
    @Type(() => PokemonGameIndicesWhereInput)
    where?: Identity<PokemonGameIndicesWhereInput>;

    @Field(() => [PokemonGameIndicesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonGameIndicesOrderByWithAggregationInput>;

    @Field(() => [PokemonGameIndicesScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonGameIndicesScalarFieldEnum}`>;

    @Field(() => PokemonGameIndicesScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<PokemonGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonGameIndicesCountAggregateInput, {nullable:true})
    _count?: Identity<PokemonGameIndicesCountAggregateInput>;

    @Field(() => PokemonGameIndicesAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokemonGameIndicesAvgAggregateInput>;

    @Field(() => PokemonGameIndicesSumAggregateInput, {nullable:true})
    _sum?: Identity<PokemonGameIndicesSumAggregateInput>;

    @Field(() => PokemonGameIndicesMinAggregateInput, {nullable:true})
    _min?: Identity<PokemonGameIndicesMinAggregateInput>;

    @Field(() => PokemonGameIndicesMaxAggregateInput, {nullable:true})
    _max?: Identity<PokemonGameIndicesMaxAggregateInput>;
}
