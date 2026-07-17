import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class LocationAreaEncounterRatesAvgAggregate {

    @Field(() => Float, {nullable:true})
    location_area_id?: number;

    @Field(() => Float, {nullable:true})
    encounter_method_id?: number;

    @Field(() => Float, {nullable:true})
    version_id?: number;

    @Field(() => Float, {nullable:true})
    rate?: number;
}
