import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';
import { Type } from 'class-transformer';
import { EncounterSlotsOrderByWithRelationInput } from './encounter-slots-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EncounterSlotsCountAggregateInput } from './encounter-slots-count-aggregate.input';
import { EncounterSlotsAvgAggregateInput } from './encounter-slots-avg-aggregate.input';
import { EncounterSlotsSumAggregateInput } from './encounter-slots-sum-aggregate.input';
import { EncounterSlotsMinAggregateInput } from './encounter-slots-min-aggregate.input';
import { EncounterSlotsMaxAggregateInput } from './encounter-slots-max-aggregate.input';

@ArgsType()
export class EncounterSlotsAggregateArgs {

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    @Type(() => EncounterSlotsWhereInput)
    where?: Identity<EncounterSlotsWhereInput>;

    @Field(() => [EncounterSlotsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EncounterSlotsOrderByWithRelationInput>;

    @Field(() => EncounterSlotsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EncounterSlotsCountAggregateInput, {nullable:true})
    _count?: Identity<EncounterSlotsCountAggregateInput>;

    @Field(() => EncounterSlotsAvgAggregateInput, {nullable:true})
    _avg?: Identity<EncounterSlotsAvgAggregateInput>;

    @Field(() => EncounterSlotsSumAggregateInput, {nullable:true})
    _sum?: Identity<EncounterSlotsSumAggregateInput>;

    @Field(() => EncounterSlotsMinAggregateInput, {nullable:true})
    _min?: Identity<EncounterSlotsMinAggregateInput>;

    @Field(() => EncounterSlotsMaxAggregateInput, {nullable:true})
    _max?: Identity<EncounterSlotsMaxAggregateInput>;
}
