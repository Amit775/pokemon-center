import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupRegionsWhereInput } from './version-group-regions-where.input';
import { Type } from 'class-transformer';
import { VersionGroupRegionsOrderByWithRelationInput } from './version-group-regions-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VersionGroupRegionsWhereUniqueInput } from './version-group-regions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VersionGroupRegionsCountAggregateInput } from './version-group-regions-count-aggregate.input';
import { VersionGroupRegionsAvgAggregateInput } from './version-group-regions-avg-aggregate.input';
import { VersionGroupRegionsSumAggregateInput } from './version-group-regions-sum-aggregate.input';
import { VersionGroupRegionsMinAggregateInput } from './version-group-regions-min-aggregate.input';
import { VersionGroupRegionsMaxAggregateInput } from './version-group-regions-max-aggregate.input';

@ArgsType()
export class VersionGroupRegionsAggregateArgs {

    @Field(() => VersionGroupRegionsWhereInput, {nullable:true})
    @Type(() => VersionGroupRegionsWhereInput)
    where?: VersionGroupRegionsWhereInput;

    @Field(() => [VersionGroupRegionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VersionGroupRegionsOrderByWithRelationInput>;

    @Field(() => VersionGroupRegionsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VersionGroupRegionsWhereUniqueInput, 'version_group_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VersionGroupRegionsCountAggregateInput, {nullable:true})
    _count?: VersionGroupRegionsCountAggregateInput;

    @Field(() => VersionGroupRegionsAvgAggregateInput, {nullable:true})
    _avg?: VersionGroupRegionsAvgAggregateInput;

    @Field(() => VersionGroupRegionsSumAggregateInput, {nullable:true})
    _sum?: VersionGroupRegionsSumAggregateInput;

    @Field(() => VersionGroupRegionsMinAggregateInput, {nullable:true})
    _min?: VersionGroupRegionsMinAggregateInput;

    @Field(() => VersionGroupRegionsMaxAggregateInput, {nullable:true})
    _max?: VersionGroupRegionsMaxAggregateInput;
}
