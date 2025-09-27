import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesOrderByWithRelationInput } from './types-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TypesCountAggregateInput } from './types-count-aggregate.input';
import { TypesAvgAggregateInput } from './types-avg-aggregate.input';
import { TypesSumAggregateInput } from './types-sum-aggregate.input';
import { TypesMinAggregateInput } from './types-min-aggregate.input';
import { TypesMaxAggregateInput } from './types-max-aggregate.input';

@ArgsType()
export class TypesAggregateArgs {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;

    @Field(() => [TypesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TypesOrderByWithRelationInput>;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TypesCountAggregateInput, {nullable:true})
    _count?: TypesCountAggregateInput;

    @Field(() => TypesAvgAggregateInput, {nullable:true})
    _avg?: TypesAvgAggregateInput;

    @Field(() => TypesSumAggregateInput, {nullable:true})
    _sum?: TypesSumAggregateInput;

    @Field(() => TypesMinAggregateInput, {nullable:true})
    _min?: TypesMinAggregateInput;

    @Field(() => TypesMaxAggregateInput, {nullable:true})
    _max?: TypesMaxAggregateInput;
}
