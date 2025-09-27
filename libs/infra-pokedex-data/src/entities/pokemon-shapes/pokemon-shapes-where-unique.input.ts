import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonShapesWhereInput } from './pokemon-shapes-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonSpeciesListRelationFilter } from '../pokemon-species/pokemon-species-list-relation-filter.input';

@InputType()
export class PokemonShapesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [PokemonShapesWhereInput], {nullable:true})
    AND?: Array<PokemonShapesWhereInput>;

    @Field(() => [PokemonShapesWhereInput], {nullable:true})
    OR?: Array<PokemonShapesWhereInput>;

    @Field(() => [PokemonShapesWhereInput], {nullable:true})
    NOT?: Array<PokemonShapesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => PokemonSpeciesListRelationFilter, {nullable:true})
    species?: PokemonSpeciesListRelationFilter;
}
