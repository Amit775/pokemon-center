import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PokemonEvolutionScalarWhereInput {

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    AND?: Array<PokemonEvolutionScalarWhereInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    OR?: Array<PokemonEvolutionScalarWhereInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonEvolutionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    evolved_species_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    evolution_trigger_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    trigger_item_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    minimum_level?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    gender_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    location_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    held_item_id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    time_of_day?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    known_move_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    known_move_type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    minimum_happiness?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    minimum_beauty?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    minimum_affection?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    relative_physical_stats?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    party_species_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    party_type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    trade_species_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    needs_overworld_rain?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    turn_upside_down?: Identity<IntFilter>;
}
