import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonGameIndicesPokemon_idVersion_idCompoundUniqueInput } from './pokemon-game-indices-pokemon-id-version-id-compound-unique.input';
import { PokemonGameIndicesWhereInput } from './pokemon-game-indices-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonScalarRelationFilter } from '../pokemon/pokemon-scalar-relation-filter.input';
import { VersionsScalarRelationFilter } from '../versions/versions-scalar-relation-filter.input';

@InputType()
export class PokemonGameIndicesWhereUniqueInput {

    @Field(() => PokemonGameIndicesPokemon_idVersion_idCompoundUniqueInput, {nullable:true})
    pokemon_id_version_id?: Identity<PokemonGameIndicesPokemon_idVersion_idCompoundUniqueInput>;

    @Field(() => [PokemonGameIndicesWhereInput], {nullable:true})
    AND?: Array<PokemonGameIndicesWhereInput>;

    @Field(() => [PokemonGameIndicesWhereInput], {nullable:true})
    OR?: Array<PokemonGameIndicesWhereInput>;

    @Field(() => [PokemonGameIndicesWhereInput], {nullable:true})
    NOT?: Array<PokemonGameIndicesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    version_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    game_index?: Identity<IntFilter>;

    @Field(() => PokemonScalarRelationFilter, {nullable:true})
    pokemon?: Identity<PokemonScalarRelationFilter>;

    @Field(() => VersionsScalarRelationFilter, {nullable:true})
    version?: Identity<VersionsScalarRelationFilter>;
}
