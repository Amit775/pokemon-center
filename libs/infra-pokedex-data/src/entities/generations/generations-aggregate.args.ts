import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { GenerationsOrderByWithRelationInput } from './generations-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GenerationsCountAggregateInput } from './generations-count-aggregate.input';
import { GenerationsAvgAggregateInput } from './generations-avg-aggregate.input';
import { GenerationsSumAggregateInput } from './generations-sum-aggregate.input';
import { GenerationsMinAggregateInput } from './generations-min-aggregate.input';
import { GenerationsMaxAggregateInput } from './generations-max-aggregate.input';

@ArgsType()
export class GenerationsAggregateArgs {

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;

    @Field(() => [GenerationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GenerationsOrderByWithRelationInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GenerationsCountAggregateInput, {nullable:true})
    _count?: GenerationsCountAggregateInput;

    @Field(() => GenerationsAvgAggregateInput, {nullable:true})
    _avg?: GenerationsAvgAggregateInput;

    @Field(() => GenerationsSumAggregateInput, {nullable:true})
    _sum?: GenerationsSumAggregateInput;

    @Field(() => GenerationsMinAggregateInput, {nullable:true})
    _min?: GenerationsMinAggregateInput;

    @Field(() => GenerationsMaxAggregateInput, {nullable:true})
    _max?: GenerationsMaxAggregateInput;
}
