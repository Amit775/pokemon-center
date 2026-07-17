import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { MovesOrderByWithRelationInput } from './moves-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MovesCountAggregateInput } from './moves-count-aggregate.input';
import { MovesAvgAggregateInput } from './moves-avg-aggregate.input';
import { MovesSumAggregateInput } from './moves-sum-aggregate.input';
import { MovesMinAggregateInput } from './moves-min-aggregate.input';
import { MovesMaxAggregateInput } from './moves-max-aggregate.input';

@ArgsType()
export class MovesAggregateArgs {

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: Identity<MovesWhereInput>;

    @Field(() => [MovesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MovesOrderByWithRelationInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MovesCountAggregateInput, {nullable:true})
    _count?: Identity<MovesCountAggregateInput>;

    @Field(() => MovesAvgAggregateInput, {nullable:true})
    _avg?: Identity<MovesAvgAggregateInput>;

    @Field(() => MovesSumAggregateInput, {nullable:true})
    _sum?: Identity<MovesSumAggregateInput>;

    @Field(() => MovesMinAggregateInput, {nullable:true})
    _min?: Identity<MovesMinAggregateInput>;

    @Field(() => MovesMaxAggregateInput, {nullable:true})
    _max?: Identity<MovesMaxAggregateInput>;
}
