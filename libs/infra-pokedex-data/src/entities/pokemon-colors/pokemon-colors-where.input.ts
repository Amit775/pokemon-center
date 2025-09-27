import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonSpeciesListRelationFilter } from '../pokemon-species/pokemon-species-list-relation-filter.input';

@InputType()
export class PokemonColorsWhereInput {

    @Field(() => [PokemonColorsWhereInput], {nullable:true})
    AND?: Array<PokemonColorsWhereInput>;

    @Field(() => [PokemonColorsWhereInput], {nullable:true})
    OR?: Array<PokemonColorsWhereInput>;

    @Field(() => [PokemonColorsWhereInput], {nullable:true})
    NOT?: Array<PokemonColorsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => PokemonSpeciesListRelationFilter, {nullable:true})
    species?: PokemonSpeciesListRelationFilter;
}
