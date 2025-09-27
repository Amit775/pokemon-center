import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestTypesWhereInput } from './contest-types-where.input';
import { Type } from 'class-transformer';
import { ContestTypesOrderByWithRelationInput } from './contest-types-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContestTypesWhereUniqueInput } from './contest-types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContestTypesCountAggregateInput } from './contest-types-count-aggregate.input';
import { ContestTypesAvgAggregateInput } from './contest-types-avg-aggregate.input';
import { ContestTypesSumAggregateInput } from './contest-types-sum-aggregate.input';
import { ContestTypesMinAggregateInput } from './contest-types-min-aggregate.input';
import { ContestTypesMaxAggregateInput } from './contest-types-max-aggregate.input';

@ArgsType()
export class ContestTypesAggregateArgs {

    @Field(() => ContestTypesWhereInput, {nullable:true})
    @Type(() => ContestTypesWhereInput)
    where?: ContestTypesWhereInput;

    @Field(() => [ContestTypesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContestTypesOrderByWithRelationInput>;

    @Field(() => ContestTypesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ContestTypesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ContestTypesCountAggregateInput, {nullable:true})
    _count?: ContestTypesCountAggregateInput;

    @Field(() => ContestTypesAvgAggregateInput, {nullable:true})
    _avg?: ContestTypesAvgAggregateInput;

    @Field(() => ContestTypesSumAggregateInput, {nullable:true})
    _sum?: ContestTypesSumAggregateInput;

    @Field(() => ContestTypesMinAggregateInput, {nullable:true})
    _min?: ContestTypesMinAggregateInput;

    @Field(() => ContestTypesMaxAggregateInput, {nullable:true})
    _max?: ContestTypesMaxAggregateInput;
}
