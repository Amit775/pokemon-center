import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesOrderByWithAggregationInput } from './pokemon-species-order-by-with-aggregation.input';
import { PokemonSpeciesScalarFieldEnum } from './pokemon-species-scalar-field.enum';
import { PokemonSpeciesScalarWhereWithAggregatesInput } from './pokemon-species-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonSpeciesCountAggregateInput } from './pokemon-species-count-aggregate.input';
import { PokemonSpeciesAvgAggregateInput } from './pokemon-species-avg-aggregate.input';
import { PokemonSpeciesSumAggregateInput } from './pokemon-species-sum-aggregate.input';
import { PokemonSpeciesMinAggregateInput } from './pokemon-species-min-aggregate.input';
import { PokemonSpeciesMaxAggregateInput } from './pokemon-species-max-aggregate.input';

@ArgsType()
export class PokemonSpeciesGroupByArgs {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;

    @Field(() => [PokemonSpeciesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonSpeciesOrderByWithAggregationInput>;

    @Field(() => [PokemonSpeciesScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonSpeciesScalarFieldEnum}`>;

    @Field(() => PokemonSpeciesScalarWhereWithAggregatesInput, {nullable:true})
    having?: PokemonSpeciesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonSpeciesCountAggregateInput, {nullable:true})
    _count?: PokemonSpeciesCountAggregateInput;

    @Field(() => PokemonSpeciesAvgAggregateInput, {nullable:true})
    _avg?: PokemonSpeciesAvgAggregateInput;

    @Field(() => PokemonSpeciesSumAggregateInput, {nullable:true})
    _sum?: PokemonSpeciesSumAggregateInput;

    @Field(() => PokemonSpeciesMinAggregateInput, {nullable:true})
    _min?: PokemonSpeciesMinAggregateInput;

    @Field(() => PokemonSpeciesMaxAggregateInput, {nullable:true})
    _max?: PokemonSpeciesMaxAggregateInput;
}
