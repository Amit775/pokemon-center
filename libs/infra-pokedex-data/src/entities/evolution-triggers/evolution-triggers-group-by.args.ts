import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvolutionTriggersWhereInput } from './evolution-triggers-where.input';
import { Type } from 'class-transformer';
import { EvolutionTriggersOrderByWithAggregationInput } from './evolution-triggers-order-by-with-aggregation.input';
import { EvolutionTriggersScalarFieldEnum } from './evolution-triggers-scalar-field.enum';
import { EvolutionTriggersScalarWhereWithAggregatesInput } from './evolution-triggers-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EvolutionTriggersCountAggregateInput } from './evolution-triggers-count-aggregate.input';
import { EvolutionTriggersAvgAggregateInput } from './evolution-triggers-avg-aggregate.input';
import { EvolutionTriggersSumAggregateInput } from './evolution-triggers-sum-aggregate.input';
import { EvolutionTriggersMinAggregateInput } from './evolution-triggers-min-aggregate.input';
import { EvolutionTriggersMaxAggregateInput } from './evolution-triggers-max-aggregate.input';

@ArgsType()
export class EvolutionTriggersGroupByArgs {

    @Field(() => EvolutionTriggersWhereInput, {nullable:true})
    @Type(() => EvolutionTriggersWhereInput)
    where?: EvolutionTriggersWhereInput;

    @Field(() => [EvolutionTriggersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EvolutionTriggersOrderByWithAggregationInput>;

    @Field(() => [EvolutionTriggersScalarFieldEnum], {nullable:false})
    by!: Array<`${EvolutionTriggersScalarFieldEnum}`>;

    @Field(() => EvolutionTriggersScalarWhereWithAggregatesInput, {nullable:true})
    having?: EvolutionTriggersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EvolutionTriggersCountAggregateInput, {nullable:true})
    _count?: EvolutionTriggersCountAggregateInput;

    @Field(() => EvolutionTriggersAvgAggregateInput, {nullable:true})
    _avg?: EvolutionTriggersAvgAggregateInput;

    @Field(() => EvolutionTriggersSumAggregateInput, {nullable:true})
    _sum?: EvolutionTriggersSumAggregateInput;

    @Field(() => EvolutionTriggersMinAggregateInput, {nullable:true})
    _min?: EvolutionTriggersMinAggregateInput;

    @Field(() => EvolutionTriggersMaxAggregateInput, {nullable:true})
    _max?: EvolutionTriggersMaxAggregateInput;
}
