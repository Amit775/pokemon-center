import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonTypesWhereInput } from './pokemon-types-where.input';
import { Type } from 'class-transformer';
import { PokemonTypesOrderByWithAggregationInput } from './pokemon-types-order-by-with-aggregation.input';
import { PokemonTypesScalarFieldEnum } from './pokemon-types-scalar-field.enum';
import { PokemonTypesScalarWhereWithAggregatesInput } from './pokemon-types-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonTypesCountAggregateInput } from './pokemon-types-count-aggregate.input';
import { PokemonTypesAvgAggregateInput } from './pokemon-types-avg-aggregate.input';
import { PokemonTypesSumAggregateInput } from './pokemon-types-sum-aggregate.input';
import { PokemonTypesMinAggregateInput } from './pokemon-types-min-aggregate.input';
import { PokemonTypesMaxAggregateInput } from './pokemon-types-max-aggregate.input';

@ArgsType()
export class PokemonTypesGroupByArgs {

    @Field(() => PokemonTypesWhereInput, {nullable:true})
    @Type(() => PokemonTypesWhereInput)
    where?: PokemonTypesWhereInput;

    @Field(() => [PokemonTypesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonTypesOrderByWithAggregationInput>;

    @Field(() => [PokemonTypesScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonTypesScalarFieldEnum}`>;

    @Field(() => PokemonTypesScalarWhereWithAggregatesInput, {nullable:true})
    having?: PokemonTypesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonTypesCountAggregateInput, {nullable:true})
    _count?: PokemonTypesCountAggregateInput;

    @Field(() => PokemonTypesAvgAggregateInput, {nullable:true})
    _avg?: PokemonTypesAvgAggregateInput;

    @Field(() => PokemonTypesSumAggregateInput, {nullable:true})
    _sum?: PokemonTypesSumAggregateInput;

    @Field(() => PokemonTypesMinAggregateInput, {nullable:true})
    _min?: PokemonTypesMinAggregateInput;

    @Field(() => PokemonTypesMaxAggregateInput, {nullable:true})
    _max?: PokemonTypesMaxAggregateInput;
}
