import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonEvolutionMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    evolved_species_id?: number;

    @Field(() => Int, {nullable:true})
    evolution_trigger_id?: number;

    @Field(() => Int, {nullable:true})
    trigger_item_id?: number;

    @Field(() => Int, {nullable:true})
    minimum_level?: number;

    @Field(() => Int, {nullable:true})
    gender_id?: number;

    @Field(() => Int, {nullable:true})
    location_id?: number;

    @Field(() => Int, {nullable:true})
    held_item_id?: number;

    @Field(() => String, {nullable:true})
    time_of_day?: string;

    @Field(() => Int, {nullable:true})
    known_move_id?: number;

    @Field(() => Int, {nullable:true})
    known_move_type_id?: number;

    @Field(() => Int, {nullable:true})
    minimum_happiness?: number;

    @Field(() => Int, {nullable:true})
    minimum_beauty?: number;

    @Field(() => Int, {nullable:true})
    minimum_affection?: number;

    @Field(() => Int, {nullable:true})
    relative_physical_stats?: number;

    @Field(() => Int, {nullable:true})
    party_species_id?: number;

    @Field(() => Int, {nullable:true})
    party_type_id?: number;

    @Field(() => Int, {nullable:true})
    trade_species_id?: number;

    @Field(() => Int, {nullable:true})
    needs_overworld_rain?: number;

    @Field(() => Int, {nullable:true})
    turn_upside_down?: number;
}
