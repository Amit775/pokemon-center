import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PokemonMoves } from '../pokemon-moves/pokemon-moves.model';
import { VersionGroupPokemonMoveMethods } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods.model';
import { PokemonMoveMethodsCount } from './pokemon-move-methods-count.output';

/**
 * @@TypeGraphQL.type(name: "PokemonMoveMethod")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonMoveMethod")'})
export class PokemonMoveMethods {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [PokemonMoves], {nullable:true})
    pokemonMoves?: Array<PokemonMoves>;

    @Field(() => [VersionGroupPokemonMoveMethods], {nullable:true})
    versionGroups?: Array<VersionGroupPokemonMoveMethods>;

    @Field(() => PokemonMoveMethodsCount, {nullable:false})
    _count?: PokemonMoveMethodsCount;
}
