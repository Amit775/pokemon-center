import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';
import { RegionsOrderByWithRelationInput } from './regions-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RegionsCountAggregateInput } from './regions-count-aggregate.input';
import { RegionsAvgAggregateInput } from './regions-avg-aggregate.input';
import { RegionsSumAggregateInput } from './regions-sum-aggregate.input';
import { RegionsMinAggregateInput } from './regions-min-aggregate.input';
import { RegionsMaxAggregateInput } from './regions-max-aggregate.input';

@ArgsType()
export class RegionsAggregateArgs {

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: Identity<RegionsWhereInput>;

    @Field(() => [RegionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RegionsOrderByWithRelationInput>;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RegionsCountAggregateInput, {nullable:true})
    _count?: Identity<RegionsCountAggregateInput>;

    @Field(() => RegionsAvgAggregateInput, {nullable:true})
    _avg?: Identity<RegionsAvgAggregateInput>;

    @Field(() => RegionsSumAggregateInput, {nullable:true})
    _sum?: Identity<RegionsSumAggregateInput>;

    @Field(() => RegionsMinAggregateInput, {nullable:true})
    _min?: Identity<RegionsMinAggregateInput>;

    @Field(() => RegionsMaxAggregateInput, {nullable:true})
    _max?: Identity<RegionsMaxAggregateInput>;
}
