import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EncountersAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    version_id?: number;

    @Field(() => Float, {nullable:true})
    location_area_id?: number;

    @Field(() => Float, {nullable:true})
    encounter_slot_id?: number;

    @Field(() => Float, {nullable:true})
    pokemon_id?: number;

    @Field(() => Float, {nullable:true})
    min_level?: number;

    @Field(() => Float, {nullable:true})
    max_level?: number;
}
