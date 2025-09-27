import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BerriesCountAggregate } from './berries-count-aggregate.output';
import { BerriesAvgAggregate } from './berries-avg-aggregate.output';
import { BerriesSumAggregate } from './berries-sum-aggregate.output';
import { BerriesMinAggregate } from './berries-min-aggregate.output';
import { BerriesMaxAggregate } from './berries-max-aggregate.output';

@ObjectType()
export class AggregateBerries {

    @Field(() => BerriesCountAggregate, {nullable:true})
    _count?: BerriesCountAggregate;

    @Field(() => BerriesAvgAggregate, {nullable:true})
    _avg?: BerriesAvgAggregate;

    @Field(() => BerriesSumAggregate, {nullable:true})
    _sum?: BerriesSumAggregate;

    @Field(() => BerriesMinAggregate, {nullable:true})
    _min?: BerriesMinAggregate;

    @Field(() => BerriesMaxAggregate, {nullable:true})
    _max?: BerriesMaxAggregate;
}
