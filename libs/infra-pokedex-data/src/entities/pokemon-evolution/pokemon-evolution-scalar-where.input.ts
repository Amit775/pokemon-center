import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class PokemonEvolutionScalarWhereInput {

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    AND?: Array<PokemonEvolutionScalarWhereInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    OR?: Array<PokemonEvolutionScalarWhereInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonEvolutionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    evolved_species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    evolution_trigger_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    trigger_item_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_level?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    gender_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    location_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    held_item_id?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    time_of_day?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    known_move_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    known_move_type_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_happiness?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_beauty?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_affection?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    relative_physical_stats?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    party_species_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    party_type_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    trade_species_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    needs_overworld_rain?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    turn_upside_down?: IntFilter;
}
