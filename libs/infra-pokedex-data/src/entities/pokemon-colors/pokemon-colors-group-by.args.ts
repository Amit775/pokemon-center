import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonColorsWhereInput } from './pokemon-colors-where.input';
import { Type } from 'class-transformer';
import { PokemonColorsOrderByWithAggregationInput } from './pokemon-colors-order-by-with-aggregation.input';
import { PokemonColorsScalarFieldEnum } from './pokemon-colors-scalar-field.enum';
import { PokemonColorsScalarWhereWithAggregatesInput } from './pokemon-colors-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonColorsCountAggregateInput } from './pokemon-colors-count-aggregate.input';
import { PokemonColorsAvgAggregateInput } from './pokemon-colors-avg-aggregate.input';
import { PokemonColorsSumAggregateInput } from './pokemon-colors-sum-aggregate.input';
import { PokemonColorsMinAggregateInput } from './pokemon-colors-min-aggregate.input';
import { PokemonColorsMaxAggregateInput } from './pokemon-colors-max-aggregate.input';

@ArgsType()
export class PokemonColorsGroupByArgs {

    @Field(() => PokemonColorsWhereInput, {nullable:true})
    @Type(() => PokemonColorsWhereInput)
    where?: PokemonColorsWhereInput;

    @Field(() => [PokemonColorsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonColorsOrderByWithAggregationInput>;

    @Field(() => [PokemonColorsScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonColorsScalarFieldEnum}`>;

    @Field(() => PokemonColorsScalarWhereWithAggregatesInput, {nullable:true})
    having?: PokemonColorsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonColorsCountAggregateInput, {nullable:true})
    _count?: PokemonColorsCountAggregateInput;

    @Field(() => PokemonColorsAvgAggregateInput, {nullable:true})
    _avg?: PokemonColorsAvgAggregateInput;

    @Field(() => PokemonColorsSumAggregateInput, {nullable:true})
    _sum?: PokemonColorsSumAggregateInput;

    @Field(() => PokemonColorsMinAggregateInput, {nullable:true})
    _min?: PokemonColorsMinAggregateInput;

    @Field(() => PokemonColorsMaxAggregateInput, {nullable:true})
    _max?: PokemonColorsMaxAggregateInput;
}
