import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokedexesWhereInput } from './pokedexes-where.input';
import { Type } from 'class-transformer';
import { PokedexesOrderByWithAggregationInput } from './pokedexes-order-by-with-aggregation.input';
import { PokedexesScalarFieldEnum } from './pokedexes-scalar-field.enum';
import { PokedexesScalarWhereWithAggregatesInput } from './pokedexes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokedexesCountAggregateInput } from './pokedexes-count-aggregate.input';
import { PokedexesAvgAggregateInput } from './pokedexes-avg-aggregate.input';
import { PokedexesSumAggregateInput } from './pokedexes-sum-aggregate.input';
import { PokedexesMinAggregateInput } from './pokedexes-min-aggregate.input';
import { PokedexesMaxAggregateInput } from './pokedexes-max-aggregate.input';

@ArgsType()
export class PokedexesGroupByArgs {

    @Field(() => PokedexesWhereInput, {nullable:true})
    @Type(() => PokedexesWhereInput)
    where?: PokedexesWhereInput;

    @Field(() => [PokedexesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokedexesOrderByWithAggregationInput>;

    @Field(() => [PokedexesScalarFieldEnum], {nullable:false})
    by!: Array<`${PokedexesScalarFieldEnum}`>;

    @Field(() => PokedexesScalarWhereWithAggregatesInput, {nullable:true})
    having?: PokedexesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokedexesCountAggregateInput, {nullable:true})
    _count?: PokedexesCountAggregateInput;

    @Field(() => PokedexesAvgAggregateInput, {nullable:true})
    _avg?: PokedexesAvgAggregateInput;

    @Field(() => PokedexesSumAggregateInput, {nullable:true})
    _sum?: PokedexesSumAggregateInput;

    @Field(() => PokedexesMinAggregateInput, {nullable:true})
    _min?: PokedexesMinAggregateInput;

    @Field(() => PokedexesMaxAggregateInput, {nullable:true})
    _max?: PokedexesMaxAggregateInput;
}
