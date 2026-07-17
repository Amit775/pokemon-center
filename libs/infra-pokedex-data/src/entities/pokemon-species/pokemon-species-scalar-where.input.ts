import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PokemonSpeciesScalarWhereInput {

    @Field(() => [PokemonSpeciesScalarWhereInput], {nullable:true})
    AND?: Array<PokemonSpeciesScalarWhereInput>;

    @Field(() => [PokemonSpeciesScalarWhereInput], {nullable:true})
    OR?: Array<PokemonSpeciesScalarWhereInput>;

    @Field(() => [PokemonSpeciesScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonSpeciesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    evolves_from_species_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    evolution_chain_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    color_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    shape_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    habitat_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    gender_rate?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    capture_rate?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    base_happiness?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_baby?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    hatch_counter?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    has_gender_differences?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    growth_rate_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    forms_switchable?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_legendary?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_mythical?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    order?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    conquest_order?: Identity<IntFilter>;
}
