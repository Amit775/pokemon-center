import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonEvolutionUncheckedCreateWithoutGenderInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    evolved_species_id!: number;

    @Field(() => Int, {nullable:false})
    evolution_trigger_id!: number;

    @Field(() => Int, {nullable:true})
    trigger_item_id?: number;

    @Field(() => Int, {nullable:true})
    minimum_level?: number;

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

    @Field(() => Int, {nullable:false})
    needs_overworld_rain!: number;

    @Field(() => Int, {nullable:false})
    turn_upside_down!: number;
}
