import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesCountAggregate } from './berries-count-aggregate.output';
import { BerriesAvgAggregate } from './berries-avg-aggregate.output';
import { BerriesSumAggregate } from './berries-sum-aggregate.output';
import { BerriesMinAggregate } from './berries-min-aggregate.output';
import { BerriesMaxAggregate } from './berries-max-aggregate.output';

@ObjectType()
export class AggregateBerries {

    @Field(() => BerriesCountAggregate, {nullable:true})
    _count?: Identity<BerriesCountAggregate>;

    @Field(() => BerriesAvgAggregate, {nullable:true})
    _avg?: Identity<BerriesAvgAggregate>;

    @Field(() => BerriesSumAggregate, {nullable:true})
    _sum?: Identity<BerriesSumAggregate>;

    @Field(() => BerriesMinAggregate, {nullable:true})
    _min?: Identity<BerriesMinAggregate>;

    @Field(() => BerriesMaxAggregate, {nullable:true})
    _max?: Identity<BerriesMaxAggregate>;
}
