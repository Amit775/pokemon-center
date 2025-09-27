import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EncountersMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    version_id?: true;

    @Field(() => Boolean, {nullable:true})
    location_area_id?: true;

    @Field(() => Boolean, {nullable:true})
    encounter_slot_id?: true;

    @Field(() => Boolean, {nullable:true})
    pokemon_id?: true;

    @Field(() => Boolean, {nullable:true})
    min_level?: true;

    @Field(() => Boolean, {nullable:true})
    max_level?: true;
}
