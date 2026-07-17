import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersWhereInput } from './encounters-where.input';
import { Type } from 'class-transformer';
import { EncountersOrderByWithRelationInput } from './encounters-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EncountersCountAggregateInput } from './encounters-count-aggregate.input';
import { EncountersAvgAggregateInput } from './encounters-avg-aggregate.input';
import { EncountersSumAggregateInput } from './encounters-sum-aggregate.input';
import { EncountersMinAggregateInput } from './encounters-min-aggregate.input';
import { EncountersMaxAggregateInput } from './encounters-max-aggregate.input';

@ArgsType()
export class EncountersAggregateArgs {

    @Field(() => EncountersWhereInput, {nullable:true})
    @Type(() => EncountersWhereInput)
    where?: Identity<EncountersWhereInput>;

    @Field(() => [EncountersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EncountersOrderByWithRelationInput>;

    @Field(() => EncountersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EncountersCountAggregateInput, {nullable:true})
    _count?: Identity<EncountersCountAggregateInput>;

    @Field(() => EncountersAvgAggregateInput, {nullable:true})
    _avg?: Identity<EncountersAvgAggregateInput>;

    @Field(() => EncountersSumAggregateInput, {nullable:true})
    _sum?: Identity<EncountersSumAggregateInput>;

    @Field(() => EncountersMinAggregateInput, {nullable:true})
    _min?: Identity<EncountersMinAggregateInput>;

    @Field(() => EncountersMaxAggregateInput, {nullable:true})
    _max?: Identity<EncountersMaxAggregateInput>;
}
