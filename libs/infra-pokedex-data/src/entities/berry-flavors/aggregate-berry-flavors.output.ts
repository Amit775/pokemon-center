import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFlavorsCountAggregate } from './berry-flavors-count-aggregate.output';
import { BerryFlavorsAvgAggregate } from './berry-flavors-avg-aggregate.output';
import { BerryFlavorsSumAggregate } from './berry-flavors-sum-aggregate.output';
import { BerryFlavorsMinAggregate } from './berry-flavors-min-aggregate.output';
import { BerryFlavorsMaxAggregate } from './berry-flavors-max-aggregate.output';

@ObjectType()
export class AggregateBerryFlavors {

    @Field(() => BerryFlavorsCountAggregate, {nullable:true})
    _count?: Identity<BerryFlavorsCountAggregate>;

    @Field(() => BerryFlavorsAvgAggregate, {nullable:true})
    _avg?: Identity<BerryFlavorsAvgAggregate>;

    @Field(() => BerryFlavorsSumAggregate, {nullable:true})
    _sum?: Identity<BerryFlavorsSumAggregate>;

    @Field(() => BerryFlavorsMinAggregate, {nullable:true})
    _min?: Identity<BerryFlavorsMinAggregate>;

    @Field(() => BerryFlavorsMaxAggregate, {nullable:true})
    _max?: Identity<BerryFlavorsMaxAggregate>;
}
