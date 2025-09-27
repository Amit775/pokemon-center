import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokedexesWhereInput } from './pokedexes-where.input';
import { Type } from 'class-transformer';
import { PokedexesOrderByWithRelationInput } from './pokedexes-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokedexesCountAggregateInput } from './pokedexes-count-aggregate.input';
import { PokedexesAvgAggregateInput } from './pokedexes-avg-aggregate.input';
import { PokedexesSumAggregateInput } from './pokedexes-sum-aggregate.input';
import { PokedexesMinAggregateInput } from './pokedexes-min-aggregate.input';
import { PokedexesMaxAggregateInput } from './pokedexes-max-aggregate.input';

@ArgsType()
export class PokedexesAggregateArgs {

    @Field(() => PokedexesWhereInput, {nullable:true})
    @Type(() => PokedexesWhereInput)
    where?: PokedexesWhereInput;

    @Field(() => [PokedexesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokedexesOrderByWithRelationInput>;

    @Field(() => PokedexesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;

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
