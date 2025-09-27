import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonEvolutionMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    evolved_species_id?: true;

    @Field(() => Boolean, {nullable:true})
    evolution_trigger_id?: true;

    @Field(() => Boolean, {nullable:true})
    trigger_item_id?: true;

    @Field(() => Boolean, {nullable:true})
    minimum_level?: true;

    @Field(() => Boolean, {nullable:true})
    gender_id?: true;

    @Field(() => Boolean, {nullable:true})
    location_id?: true;

    @Field(() => Boolean, {nullable:true})
    held_item_id?: true;

    @Field(() => Boolean, {nullable:true})
    time_of_day?: true;

    @Field(() => Boolean, {nullable:true})
    known_move_id?: true;

    @Field(() => Boolean, {nullable:true})
    known_move_type_id?: true;

    @Field(() => Boolean, {nullable:true})
    minimum_happiness?: true;

    @Field(() => Boolean, {nullable:true})
    minimum_beauty?: true;

    @Field(() => Boolean, {nullable:true})
    minimum_affection?: true;

    @Field(() => Boolean, {nullable:true})
    relative_physical_stats?: true;

    @Field(() => Boolean, {nullable:true})
    party_species_id?: true;

    @Field(() => Boolean, {nullable:true})
    party_type_id?: true;

    @Field(() => Boolean, {nullable:true})
    trade_species_id?: true;

    @Field(() => Boolean, {nullable:true})
    needs_overworld_rain?: true;

    @Field(() => Boolean, {nullable:true})
    turn_upside_down?: true;
}
