import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonAbilitiesWhereInput } from './pokemon-abilities-where.input';
import { Type } from 'class-transformer';
import { PokemonAbilitiesOrderByWithAggregationInput } from './pokemon-abilities-order-by-with-aggregation.input';
import { PokemonAbilitiesScalarFieldEnum } from './pokemon-abilities-scalar-field.enum';
import { PokemonAbilitiesScalarWhereWithAggregatesInput } from './pokemon-abilities-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonAbilitiesCountAggregateInput } from './pokemon-abilities-count-aggregate.input';
import { PokemonAbilitiesAvgAggregateInput } from './pokemon-abilities-avg-aggregate.input';
import { PokemonAbilitiesSumAggregateInput } from './pokemon-abilities-sum-aggregate.input';
import { PokemonAbilitiesMinAggregateInput } from './pokemon-abilities-min-aggregate.input';
import { PokemonAbilitiesMaxAggregateInput } from './pokemon-abilities-max-aggregate.input';

@ArgsType()
export class PokemonAbilitiesGroupByArgs {

    @Field(() => PokemonAbilitiesWhereInput, {nullable:true})
    @Type(() => PokemonAbilitiesWhereInput)
    where?: PokemonAbilitiesWhereInput;

    @Field(() => [PokemonAbilitiesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonAbilitiesOrderByWithAggregationInput>;

    @Field(() => [PokemonAbilitiesScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonAbilitiesScalarFieldEnum}`>;

    @Field(() => PokemonAbilitiesScalarWhereWithAggregatesInput, {nullable:true})
    having?: PokemonAbilitiesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonAbilitiesCountAggregateInput, {nullable:true})
    _count?: PokemonAbilitiesCountAggregateInput;

    @Field(() => PokemonAbilitiesAvgAggregateInput, {nullable:true})
    _avg?: PokemonAbilitiesAvgAggregateInput;

    @Field(() => PokemonAbilitiesSumAggregateInput, {nullable:true})
    _sum?: PokemonAbilitiesSumAggregateInput;

    @Field(() => PokemonAbilitiesMinAggregateInput, {nullable:true})
    _min?: PokemonAbilitiesMinAggregateInput;

    @Field(() => PokemonAbilitiesMaxAggregateInput, {nullable:true})
    _max?: PokemonAbilitiesMaxAggregateInput;
}
