import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GendersWhereInput } from './genders-where.input';
import { Type } from 'class-transformer';
import { GendersOrderByWithRelationInput } from './genders-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GendersWhereUniqueInput } from './genders-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GendersCountAggregateInput } from './genders-count-aggregate.input';
import { GendersAvgAggregateInput } from './genders-avg-aggregate.input';
import { GendersSumAggregateInput } from './genders-sum-aggregate.input';
import { GendersMinAggregateInput } from './genders-min-aggregate.input';
import { GendersMaxAggregateInput } from './genders-max-aggregate.input';

@ArgsType()
export class GendersAggregateArgs {

    @Field(() => GendersWhereInput, {nullable:true})
    @Type(() => GendersWhereInput)
    where?: GendersWhereInput;

    @Field(() => [GendersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GendersOrderByWithRelationInput>;

    @Field(() => GendersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GendersWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GendersCountAggregateInput, {nullable:true})
    _count?: GendersCountAggregateInput;

    @Field(() => GendersAvgAggregateInput, {nullable:true})
    _avg?: GendersAvgAggregateInput;

    @Field(() => GendersSumAggregateInput, {nullable:true})
    _sum?: GendersSumAggregateInput;

    @Field(() => GendersMinAggregateInput, {nullable:true})
    _min?: GendersMinAggregateInput;

    @Field(() => GendersMaxAggregateInput, {nullable:true})
    _max?: GendersMaxAggregateInput;
}
