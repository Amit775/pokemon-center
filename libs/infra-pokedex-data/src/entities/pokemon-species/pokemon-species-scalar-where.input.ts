import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class PokemonSpeciesScalarWhereInput {

    @Field(() => [PokemonSpeciesScalarWhereInput], {nullable:true})
    AND?: Array<PokemonSpeciesScalarWhereInput>;

    @Field(() => [PokemonSpeciesScalarWhereInput], {nullable:true})
    OR?: Array<PokemonSpeciesScalarWhereInput>;

    @Field(() => [PokemonSpeciesScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonSpeciesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    evolves_from_species_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    evolution_chain_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    color_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    shape_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    habitat_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    gender_rate?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    capture_rate?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_happiness?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_baby?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    hatch_counter?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    has_gender_differences?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    growth_rate_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    forms_switchable?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_legendary?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_mythical?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    conquest_order?: IntNullableFilter;
}
