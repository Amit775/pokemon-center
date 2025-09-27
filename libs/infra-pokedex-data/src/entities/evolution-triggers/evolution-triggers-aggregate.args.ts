import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvolutionTriggersWhereInput } from './evolution-triggers-where.input';
import { Type } from 'class-transformer';
import { EvolutionTriggersOrderByWithRelationInput } from './evolution-triggers-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EvolutionTriggersWhereUniqueInput } from './evolution-triggers-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EvolutionTriggersCountAggregateInput } from './evolution-triggers-count-aggregate.input';
import { EvolutionTriggersAvgAggregateInput } from './evolution-triggers-avg-aggregate.input';
import { EvolutionTriggersSumAggregateInput } from './evolution-triggers-sum-aggregate.input';
import { EvolutionTriggersMinAggregateInput } from './evolution-triggers-min-aggregate.input';
import { EvolutionTriggersMaxAggregateInput } from './evolution-triggers-max-aggregate.input';

@ArgsType()
export class EvolutionTriggersAggregateArgs {

    @Field(() => EvolutionTriggersWhereInput, {nullable:true})
    @Type(() => EvolutionTriggersWhereInput)
    where?: EvolutionTriggersWhereInput;

    @Field(() => [EvolutionTriggersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EvolutionTriggersOrderByWithRelationInput>;

    @Field(() => EvolutionTriggersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EvolutionTriggersWhereUniqueInput, 'id'>;

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
