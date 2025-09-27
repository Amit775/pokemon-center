import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BerryFlavorsCountAggregate } from './berry-flavors-count-aggregate.output';
import { BerryFlavorsAvgAggregate } from './berry-flavors-avg-aggregate.output';
import { BerryFlavorsSumAggregate } from './berry-flavors-sum-aggregate.output';
import { BerryFlavorsMinAggregate } from './berry-flavors-min-aggregate.output';
import { BerryFlavorsMaxAggregate } from './berry-flavors-max-aggregate.output';

@ObjectType()
export class AggregateBerryFlavors {

    @Field(() => BerryFlavorsCountAggregate, {nullable:true})
    _count?: BerryFlavorsCountAggregate;

    @Field(() => BerryFlavorsAvgAggregate, {nullable:true})
    _avg?: BerryFlavorsAvgAggregate;

    @Field(() => BerryFlavorsSumAggregate, {nullable:true})
    _sum?: BerryFlavorsSumAggregate;

    @Field(() => BerryFlavorsMinAggregate, {nullable:true})
    _min?: BerryFlavorsMinAggregate;

    @Field(() => BerryFlavorsMaxAggregate, {nullable:true})
    _max?: BerryFlavorsMaxAggregate;
}
