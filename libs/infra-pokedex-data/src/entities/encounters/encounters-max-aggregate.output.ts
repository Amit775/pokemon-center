import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EncountersMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    version_id?: number;

    @Field(() => Int, {nullable:true})
    location_area_id?: number;

    @Field(() => Int, {nullable:true})
    encounter_slot_id?: number;

    @Field(() => Int, {nullable:true})
    pokemon_id?: number;

    @Field(() => Int, {nullable:true})
    min_level?: number;

    @Field(() => Int, {nullable:true})
    max_level?: number;
}
