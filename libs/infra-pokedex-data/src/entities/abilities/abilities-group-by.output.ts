import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AbilitiesCountAggregate } from './abilities-count-aggregate.output';
import { AbilitiesAvgAggregate } from './abilities-avg-aggregate.output';
import { AbilitiesSumAggregate } from './abilities-sum-aggregate.output';
import { AbilitiesMinAggregate } from './abilities-min-aggregate.output';
import { AbilitiesMaxAggregate } from './abilities-max-aggregate.output';

@ObjectType()
export class AbilitiesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    is_main_series!: number;

    @Field(() => AbilitiesCountAggregate, {nullable:true})
    _count?: AbilitiesCountAggregate;

    @Field(() => AbilitiesAvgAggregate, {nullable:true})
    _avg?: AbilitiesAvgAggregate;

    @Field(() => AbilitiesSumAggregate, {nullable:true})
    _sum?: AbilitiesSumAggregate;

    @Field(() => AbilitiesMinAggregate, {nullable:true})
    _min?: AbilitiesMinAggregate;

    @Field(() => AbilitiesMaxAggregate, {nullable:true})
    _max?: AbilitiesMaxAggregate;
}
