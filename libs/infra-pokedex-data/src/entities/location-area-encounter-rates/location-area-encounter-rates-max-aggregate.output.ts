import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LocationAreaEncounterRatesMaxAggregate {

    @Field(() => Int, {nullable:true})
    location_area_id?: number;

    @Field(() => Int, {nullable:true})
    encounter_method_id?: number;

    @Field(() => Int, {nullable:true})
    version_id?: number;

    @Field(() => Int, {nullable:true})
    rate?: number;
}
