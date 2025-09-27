import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestCombosWhereInput } from './contest-combos-where.input';
import { Type } from 'class-transformer';
import { ContestCombosOrderByWithRelationInput } from './contest-combos-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContestCombosCountAggregateInput } from './contest-combos-count-aggregate.input';
import { ContestCombosAvgAggregateInput } from './contest-combos-avg-aggregate.input';
import { ContestCombosSumAggregateInput } from './contest-combos-sum-aggregate.input';
import { ContestCombosMinAggregateInput } from './contest-combos-min-aggregate.input';
import { ContestCombosMaxAggregateInput } from './contest-combos-max-aggregate.input';

@ArgsType()
export class ContestCombosAggregateArgs {

    @Field(() => ContestCombosWhereInput, {nullable:true})
    @Type(() => ContestCombosWhereInput)
    where?: ContestCombosWhereInput;

    @Field(() => [ContestCombosOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContestCombosOrderByWithRelationInput>;

    @Field(() => ContestCombosWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ContestCombosCountAggregateInput, {nullable:true})
    _count?: ContestCombosCountAggregateInput;

    @Field(() => ContestCombosAvgAggregateInput, {nullable:true})
    _avg?: ContestCombosAvgAggregateInput;

    @Field(() => ContestCombosSumAggregateInput, {nullable:true})
    _sum?: ContestCombosSumAggregateInput;

    @Field(() => ContestCombosMinAggregateInput, {nullable:true})
    _min?: ContestCombosMinAggregateInput;

    @Field(() => ContestCombosMaxAggregateInput, {nullable:true})
    _max?: ContestCombosMaxAggregateInput;
}
