import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsOrderByWithRelationInput } from './version-groups-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VersionGroupsCountAggregateInput } from './version-groups-count-aggregate.input';
import { VersionGroupsAvgAggregateInput } from './version-groups-avg-aggregate.input';
import { VersionGroupsSumAggregateInput } from './version-groups-sum-aggregate.input';
import { VersionGroupsMinAggregateInput } from './version-groups-min-aggregate.input';
import { VersionGroupsMaxAggregateInput } from './version-groups-max-aggregate.input';

@ArgsType()
export class VersionGroupsAggregateArgs {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: Identity<VersionGroupsWhereInput>;

    @Field(() => [VersionGroupsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VersionGroupsOrderByWithRelationInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VersionGroupsCountAggregateInput, {nullable:true})
    _count?: Identity<VersionGroupsCountAggregateInput>;

    @Field(() => VersionGroupsAvgAggregateInput, {nullable:true})
    _avg?: Identity<VersionGroupsAvgAggregateInput>;

    @Field(() => VersionGroupsSumAggregateInput, {nullable:true})
    _sum?: Identity<VersionGroupsSumAggregateInput>;

    @Field(() => VersionGroupsMinAggregateInput, {nullable:true})
    _min?: Identity<VersionGroupsMinAggregateInput>;

    @Field(() => VersionGroupsMaxAggregateInput, {nullable:true})
    _max?: Identity<VersionGroupsMaxAggregateInput>;
}
