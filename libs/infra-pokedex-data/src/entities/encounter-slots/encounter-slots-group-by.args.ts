import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';
import { Type } from 'class-transformer';
import { EncounterSlotsOrderByWithAggregationInput } from './encounter-slots-order-by-with-aggregation.input';
import { EncounterSlotsScalarFieldEnum } from './encounter-slots-scalar-field.enum';
import { EncounterSlotsScalarWhereWithAggregatesInput } from './encounter-slots-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EncounterSlotsCountAggregateInput } from './encounter-slots-count-aggregate.input';
import { EncounterSlotsAvgAggregateInput } from './encounter-slots-avg-aggregate.input';
import { EncounterSlotsSumAggregateInput } from './encounter-slots-sum-aggregate.input';
import { EncounterSlotsMinAggregateInput } from './encounter-slots-min-aggregate.input';
import { EncounterSlotsMaxAggregateInput } from './encounter-slots-max-aggregate.input';

@ArgsType()
export class EncounterSlotsGroupByArgs {

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    @Type(() => EncounterSlotsWhereInput)
    where?: EncounterSlotsWhereInput;

    @Field(() => [EncounterSlotsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EncounterSlotsOrderByWithAggregationInput>;

    @Field(() => [EncounterSlotsScalarFieldEnum], {nullable:false})
    by!: Array<`${EncounterSlotsScalarFieldEnum}`>;

    @Field(() => EncounterSlotsScalarWhereWithAggregatesInput, {nullable:true})
    having?: EncounterSlotsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EncounterSlotsCountAggregateInput, {nullable:true})
    _count?: EncounterSlotsCountAggregateInput;

    @Field(() => EncounterSlotsAvgAggregateInput, {nullable:true})
    _avg?: EncounterSlotsAvgAggregateInput;

    @Field(() => EncounterSlotsSumAggregateInput, {nullable:true})
    _sum?: EncounterSlotsSumAggregateInput;

    @Field(() => EncounterSlotsMinAggregateInput, {nullable:true})
    _min?: EncounterSlotsMinAggregateInput;

    @Field(() => EncounterSlotsMaxAggregateInput, {nullable:true})
    _max?: EncounterSlotsMaxAggregateInput;
}
