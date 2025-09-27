import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonShapesWhereInput } from './pokemon-shapes-where.input';
import { Type } from 'class-transformer';
import { PokemonShapesOrderByWithRelationInput } from './pokemon-shapes-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonShapesWhereUniqueInput } from './pokemon-shapes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonShapesCountAggregateInput } from './pokemon-shapes-count-aggregate.input';
import { PokemonShapesAvgAggregateInput } from './pokemon-shapes-avg-aggregate.input';
import { PokemonShapesSumAggregateInput } from './pokemon-shapes-sum-aggregate.input';
import { PokemonShapesMinAggregateInput } from './pokemon-shapes-min-aggregate.input';
import { PokemonShapesMaxAggregateInput } from './pokemon-shapes-max-aggregate.input';

@ArgsType()
export class PokemonShapesAggregateArgs {

    @Field(() => PokemonShapesWhereInput, {nullable:true})
    @Type(() => PokemonShapesWhereInput)
    where?: PokemonShapesWhereInput;

    @Field(() => [PokemonShapesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonShapesOrderByWithRelationInput>;

    @Field(() => PokemonShapesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonShapesWhereUniqueInput, 'id'>;

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
