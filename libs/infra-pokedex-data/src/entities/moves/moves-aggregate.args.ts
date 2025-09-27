import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { MovesOrderByWithRelationInput } from './moves-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
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
    where?: MovesWhereInput;

    @Field(() => [MovesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MovesOrderByWithRelationInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MovesCountAggregateInput, {nullable:true})
    _count?: MovesCountAggregateInput;

    @Field(() => MovesAvgAggregateInput, {nullable:true})
    _avg?: MovesAvgAggregateInput;

    @Field(() => MovesSumAggregateInput, {nullable:true})
    _sum?: MovesSumAggregateInput;

    @Field(() => MovesMinAggregateInput, {nullable:true})
    _min?: MovesMinAggregateInput;

    @Field(() => MovesMaxAggregateInput, {nullable:true})
    _max?: MovesMaxAggregateInput;
}
