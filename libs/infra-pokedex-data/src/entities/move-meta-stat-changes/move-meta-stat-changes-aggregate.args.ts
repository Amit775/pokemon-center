import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaStatChangesWhereInput } from './move-meta-stat-changes-where.input';
import { Type } from 'class-transformer';
import { MoveMetaStatChangesOrderByWithRelationInput } from './move-meta-stat-changes-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoveMetaStatChangesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveMetaStatChangesCountAggregateInput } from './move-meta-stat-changes-count-aggregate.input';
import { MoveMetaStatChangesAvgAggregateInput } from './move-meta-stat-changes-avg-aggregate.input';
import { MoveMetaStatChangesSumAggregateInput } from './move-meta-stat-changes-sum-aggregate.input';
import { MoveMetaStatChangesMinAggregateInput } from './move-meta-stat-changes-min-aggregate.input';
import { MoveMetaStatChangesMaxAggregateInput } from './move-meta-stat-changes-max-aggregate.input';

@ArgsType()
export class MoveMetaStatChangesAggregateArgs {

    @Field(() => MoveMetaStatChangesWhereInput, {nullable:true})
    @Type(() => MoveMetaStatChangesWhereInput)
    where?: MoveMetaStatChangesWhereInput;

    @Field(() => [MoveMetaStatChangesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveMetaStatChangesOrderByWithRelationInput>;

    @Field(() => MoveMetaStatChangesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveMetaStatChangesCountAggregateInput, {nullable:true})
    _count?: MoveMetaStatChangesCountAggregateInput;

    @Field(() => MoveMetaStatChangesAvgAggregateInput, {nullable:true})
    _avg?: MoveMetaStatChangesAvgAggregateInput;

    @Field(() => MoveMetaStatChangesSumAggregateInput, {nullable:true})
    _sum?: MoveMetaStatChangesSumAggregateInput;

    @Field(() => MoveMetaStatChangesMinAggregateInput, {nullable:true})
    _min?: MoveMetaStatChangesMinAggregateInput;

    @Field(() => MoveMetaStatChangesMaxAggregateInput, {nullable:true})
    _max?: MoveMetaStatChangesMaxAggregateInput;
}
