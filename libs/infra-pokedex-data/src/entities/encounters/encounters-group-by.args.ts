import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncountersWhereInput } from './encounters-where.input';
import { Type } from 'class-transformer';
import { EncountersOrderByWithAggregationInput } from './encounters-order-by-with-aggregation.input';
import { EncountersScalarFieldEnum } from './encounters-scalar-field.enum';
import { EncountersScalarWhereWithAggregatesInput } from './encounters-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EncountersCountAggregateInput } from './encounters-count-aggregate.input';
import { EncountersAvgAggregateInput } from './encounters-avg-aggregate.input';
import { EncountersSumAggregateInput } from './encounters-sum-aggregate.input';
import { EncountersMinAggregateInput } from './encounters-min-aggregate.input';
import { EncountersMaxAggregateInput } from './encounters-max-aggregate.input';

@ArgsType()
export class EncountersGroupByArgs {

    @Field(() => EncountersWhereInput, {nullable:true})
    @Type(() => EncountersWhereInput)
    where?: EncountersWhereInput;

    @Field(() => [EncountersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EncountersOrderByWithAggregationInput>;

    @Field(() => [EncountersScalarFieldEnum], {nullable:false})
    by!: Array<`${EncountersScalarFieldEnum}`>;

    @Field(() => EncountersScalarWhereWithAggregatesInput, {nullable:true})
    having?: EncountersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EncountersCountAggregateInput, {nullable:true})
    _count?: EncountersCountAggregateInput;

    @Field(() => EncountersAvgAggregateInput, {nullable:true})
    _avg?: EncountersAvgAggregateInput;

    @Field(() => EncountersSumAggregateInput, {nullable:true})
    _sum?: EncountersSumAggregateInput;

    @Field(() => EncountersMinAggregateInput, {nullable:true})
    _min?: EncountersMinAggregateInput;

    @Field(() => EncountersMaxAggregateInput, {nullable:true})
    _max?: EncountersMaxAggregateInput;
}
