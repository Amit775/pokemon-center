import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BerryFirmnessCountAggregate } from './berry-firmness-count-aggregate.output';
import { BerryFirmnessAvgAggregate } from './berry-firmness-avg-aggregate.output';
import { BerryFirmnessSumAggregate } from './berry-firmness-sum-aggregate.output';
import { BerryFirmnessMinAggregate } from './berry-firmness-min-aggregate.output';
import { BerryFirmnessMaxAggregate } from './berry-firmness-max-aggregate.output';

@ObjectType()
export class AggregateBerryFirmness {

    @Field(() => BerryFirmnessCountAggregate, {nullable:true})
    _count?: BerryFirmnessCountAggregate;

    @Field(() => BerryFirmnessAvgAggregate, {nullable:true})
    _avg?: BerryFirmnessAvgAggregate;

    @Field(() => BerryFirmnessSumAggregate, {nullable:true})
    _sum?: BerryFirmnessSumAggregate;

    @Field(() => BerryFirmnessMinAggregate, {nullable:true})
    _min?: BerryFirmnessMinAggregate;

    @Field(() => BerryFirmnessMaxAggregate, {nullable:true})
    _max?: BerryFirmnessMaxAggregate;
}
