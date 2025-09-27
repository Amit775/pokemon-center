import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';
import { PokemonAbilitiesListRelationFilter } from '../pokemon-abilities/pokemon-abilities-list-relation-filter.input';

@InputType()
export class AbilitiesWhereInput {

    @Field(() => [AbilitiesWhereInput], {nullable:true})
    AND?: Array<AbilitiesWhereInput>;

    @Field(() => [AbilitiesWhereInput], {nullable:true})
    OR?: Array<AbilitiesWhereInput>;

    @Field(() => [AbilitiesWhereInput], {nullable:true})
    NOT?: Array<AbilitiesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_main_series?: IntFilter;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: GenerationsScalarRelationFilter;

    @Field(() => PokemonAbilitiesListRelationFilter, {nullable:true})
    pokemonAbilities?: PokemonAbilitiesListRelationFilter;
}
