import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonShapesWhereInput } from './pokemon-shapes-where.input';
import { Type } from 'class-transformer';
import { PokemonShapesOrderByWithAggregationInput } from './pokemon-shapes-order-by-with-aggregation.input';
import { PokemonShapesScalarFieldEnum } from './pokemon-shapes-scalar-field.enum';
import { PokemonShapesScalarWhereWithAggregatesInput } from './pokemon-shapes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonShapesCountAggregateInput } from './pokemon-shapes-count-aggregate.input';
import { PokemonShapesAvgAggregateInput } from './pokemon-shapes-avg-aggregate.input';
import { PokemonShapesSumAggregateInput } from './pokemon-shapes-sum-aggregate.input';
import { PokemonShapesMinAggregateInput } from './pokemon-shapes-min-aggregate.input';
import { PokemonShapesMaxAggregateInput } from './pokemon-shapes-max-aggregate.input';

@ArgsType()
export class PokemonShapesGroupByArgs {

    @Field(() => PokemonShapesWhereInput, {nullable:true})
    @Type(() => PokemonShapesWhereInput)
    where?: PokemonShapesWhereInput;

    @Field(() => [PokemonShapesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonShapesOrderByWithAggregationInput>;

    @Field(() => [PokemonShapesScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonShapesScalarFieldEnum}`>;

    @Field(() => PokemonShapesScalarWhereWithAggregatesInput, {nullable:true})
    having?: PokemonShapesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonShapesCountAggregateInput, {nullable:true})
    _count?: PokemonShapesCountAggregateInput;

    @Field(() => PokemonShapesAvgAggregateInput, {nullable:true})
    _avg?: PokemonShapesAvgAggregateInput;

    @Field(() => PokemonShapesSumAggregateInput, {nullable:true})
    _sum?: PokemonShapesSumAggregateInput;

    @Field(() => PokemonShapesMinAggregateInput, {nullable:true})
    _min?: PokemonShapesMinAggregateInput;

    @Field(() => PokemonShapesMaxAggregateInput, {nullable:true})
    _max?: PokemonShapesMaxAggregateInput;
}
