import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonMovesListRelationFilter } from '../pokemon-moves/pokemon-moves-list-relation-filter.input';
import { VersionGroupPokemonMoveMethodsListRelationFilter } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-list-relation-filter.input';

@InputType()
export class PokemonMoveMethodsWhereInput {

    @Field(() => [PokemonMoveMethodsWhereInput], {nullable:true})
    AND?: Array<PokemonMoveMethodsWhereInput>;

    @Field(() => [PokemonMoveMethodsWhereInput], {nullable:true})
    OR?: Array<PokemonMoveMethodsWhereInput>;

    @Field(() => [PokemonMoveMethodsWhereInput], {nullable:true})
    NOT?: Array<PokemonMoveMethodsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => PokemonMovesListRelationFilter, {nullable:true})
    pokemonMoves?: PokemonMovesListRelationFilter;

    @Field(() => VersionGroupPokemonMoveMethodsListRelationFilter, {nullable:true})
    versionGroups?: VersionGroupPokemonMoveMethodsListRelationFilter;
}
