import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionInput {

    @Field(() => Int, {nullable:true})
    location_area_id?: number;

    @Field(() => Int, {nullable:true})
    encounter_method_id?: number;

    @Field(() => Int, {nullable:true})
    rate?: number;
}
