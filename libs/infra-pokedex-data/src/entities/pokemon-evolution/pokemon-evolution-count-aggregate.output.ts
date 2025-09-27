import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonEvolutionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    evolved_species_id!: number;

    @Field(() => Int, {nullable:false})
    evolution_trigger_id!: number;

    @Field(() => Int, {nullable:false})
    trigger_item_id!: number;

    @Field(() => Int, {nullable:false})
    minimum_level!: number;

    @Field(() => Int, {nullable:false})
    gender_id!: number;

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    held_item_id!: number;

    @Field(() => Int, {nullable:false})
    time_of_day!: number;

    @Field(() => Int, {nullable:false})
    known_move_id!: number;

    @Field(() => Int, {nullable:false})
    known_move_type_id!: number;

    @Field(() => Int, {nullable:false})
    minimum_happiness!: number;

    @Field(() => Int, {nullable:false})
    minimum_beauty!: number;

    @Field(() => Int, {nullable:false})
    minimum_affection!: number;

    @Field(() => Int, {nullable:false})
    relative_physical_stats!: number;

    @Field(() => Int, {nullable:false})
    party_species_id!: number;

    @Field(() => Int, {nullable:false})
    party_type_id!: number;

    @Field(() => Int, {nullable:false})
    trade_species_id!: number;

    @Field(() => Int, {nullable:false})
    needs_overworld_rain!: number;

    @Field(() => Int, {nullable:false})
    turn_upside_down!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
