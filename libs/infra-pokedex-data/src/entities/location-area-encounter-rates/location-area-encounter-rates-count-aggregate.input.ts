import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LocationAreaEncounterRatesCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    location_area_id?: true;

    @Field(() => Boolean, {nullable:true})
    encounter_method_id?: true;

    @Field(() => Boolean, {nullable:true})
    version_id?: true;

    @Field(() => Boolean, {nullable:true})
    rate?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
