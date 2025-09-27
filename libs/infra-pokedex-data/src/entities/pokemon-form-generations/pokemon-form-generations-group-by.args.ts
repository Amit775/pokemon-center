import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormGenerationsWhereInput } from './pokemon-form-generations-where.input';
import { Type } from 'class-transformer';
import { PokemonFormGenerationsOrderByWithAggregationInput } from './pokemon-form-generations-order-by-with-aggregation.input';
import { PokemonFormGenerationsScalarFieldEnum } from './pokemon-form-generations-scalar-field.enum';
import { PokemonFormGenerationsScalarWhereWithAggregatesInput } from './pokemon-form-generations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonFormGenerationsCountAggregateInput } from './pokemon-form-generations-count-aggregate.input';
import { PokemonFormGenerationsAvgAggregateInput } from './pokemon-form-generations-avg-aggregate.input';
import { PokemonFormGenerationsSumAggregateInput } from './pokemon-form-generations-sum-aggregate.input';
import { PokemonFormGenerationsMinAggregateInput } from './pokemon-form-generations-min-aggregate.input';
import { PokemonFormGenerationsMaxAggregateInput } from './pokemon-form-generations-max-aggregate.input';

@ArgsType()
export class PokemonFormGenerationsGroupByArgs {

    @Field(() => PokemonFormGenerationsWhereInput, {nullable:true})
    @Type(() => PokemonFormGenerationsWhereInput)
    where?: PokemonFormGenerationsWhereInput;

    @Field(() => [PokemonFormGenerationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonFormGenerationsOrderByWithAggregationInput>;

    @Field(() => [PokemonFormGenerationsScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonFormGenerationsScalarFieldEnum}`>;

    @Field(() => PokemonFormGenerationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: PokemonFormGenerationsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonFormGenerationsCountAggregateInput, {nullable:true})
    _count?: PokemonFormGenerationsCountAggregateInput;

    @Field(() => PokemonFormGenerationsAvgAggregateInput, {nullable:true})
    _avg?: PokemonFormGenerationsAvgAggregateInput;

    @Field(() => PokemonFormGenerationsSumAggregateInput, {nullable:true})
    _sum?: PokemonFormGenerationsSumAggregateInput;

    @Field(() => PokemonFormGenerationsMinAggregateInput, {nullable:true})
    _min?: PokemonFormGenerationsMinAggregateInput;

    @Field(() => PokemonFormGenerationsMaxAggregateInput, {nullable:true})
    _max?: PokemonFormGenerationsMaxAggregateInput;
}
