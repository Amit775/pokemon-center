import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonSpeciesListRelationFilter } from '../pokemon-species/pokemon-species-list-relation-filter.input';

@InputType()
export class PokemonShapesWhereInput {

    @Field(() => [PokemonShapesWhereInput], {nullable:true})
    AND?: Array<PokemonShapesWhereInput>;

    @Field(() => [PokemonShapesWhereInput], {nullable:true})
    OR?: Array<PokemonShapesWhereInput>;

    @Field(() => [PokemonShapesWhereInput], {nullable:true})
    NOT?: Array<PokemonShapesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => PokemonSpeciesListRelationFilter, {nullable:true})
    species?: Identity<PokemonSpeciesListRelationFilter>;
}
