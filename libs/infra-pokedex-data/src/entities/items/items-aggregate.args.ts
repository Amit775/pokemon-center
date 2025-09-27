import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsOrderByWithRelationInput } from './items-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemsCountAggregateInput } from './items-count-aggregate.input';
import { ItemsAvgAggregateInput } from './items-avg-aggregate.input';
import { ItemsSumAggregateInput } from './items-sum-aggregate.input';
import { ItemsMinAggregateInput } from './items-min-aggregate.input';
import { ItemsMaxAggregateInput } from './items-max-aggregate.input';

@ArgsType()
export class ItemsAggregateArgs {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: ItemsWhereInput;

    @Field(() => [ItemsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemsOrderByWithRelationInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemsCountAggregateInput, {nullable:true})
    _count?: ItemsCountAggregateInput;

    @Field(() => ItemsAvgAggregateInput, {nullable:true})
    _avg?: ItemsAvgAggregateInput;

    @Field(() => ItemsSumAggregateInput, {nullable:true})
    _sum?: ItemsSumAggregateInput;

    @Field(() => ItemsMinAggregateInput, {nullable:true})
    _min?: ItemsMinAggregateInput;

    @Field(() => ItemsMaxAggregateInput, {nullable:true})
    _max?: ItemsMaxAggregateInput;
}
