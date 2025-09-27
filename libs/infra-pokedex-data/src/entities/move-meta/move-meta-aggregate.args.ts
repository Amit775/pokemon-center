import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaWhereInput } from './move-meta-where.input';
import { Type } from 'class-transformer';
import { MoveMetaOrderByWithRelationInput } from './move-meta-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveMetaCountAggregateInput } from './move-meta-count-aggregate.input';
import { MoveMetaAvgAggregateInput } from './move-meta-avg-aggregate.input';
import { MoveMetaSumAggregateInput } from './move-meta-sum-aggregate.input';
import { MoveMetaMinAggregateInput } from './move-meta-min-aggregate.input';
import { MoveMetaMaxAggregateInput } from './move-meta-max-aggregate.input';

@ArgsType()
export class MoveMetaAggregateArgs {

    @Field(() => MoveMetaWhereInput, {nullable:true})
    @Type(() => MoveMetaWhereInput)
    where?: MoveMetaWhereInput;

    @Field(() => [MoveMetaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveMetaOrderByWithRelationInput>;

    @Field(() => MoveMetaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveMetaCountAggregateInput, {nullable:true})
    _count?: MoveMetaCountAggregateInput;

    @Field(() => MoveMetaAvgAggregateInput, {nullable:true})
    _avg?: MoveMetaAvgAggregateInput;

    @Field(() => MoveMetaSumAggregateInput, {nullable:true})
    _sum?: MoveMetaSumAggregateInput;

    @Field(() => MoveMetaMinAggregateInput, {nullable:true})
    _min?: MoveMetaMinAggregateInput;

    @Field(() => MoveMetaMaxAggregateInput, {nullable:true})
    _max?: MoveMetaMaxAggregateInput;
}
