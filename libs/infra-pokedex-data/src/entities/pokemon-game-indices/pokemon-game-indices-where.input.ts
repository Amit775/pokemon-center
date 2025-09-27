import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonScalarRelationFilter } from '../pokemon/pokemon-scalar-relation-filter.input';
import { VersionsScalarRelationFilter } from '../versions/versions-scalar-relation-filter.input';

@InputType()
export class PokemonGameIndicesWhereInput {

    @Field(() => [PokemonGameIndicesWhereInput], {nullable:true})
    AND?: Array<PokemonGameIndicesWhereInput>;

    @Field(() => [PokemonGameIndicesWhereInput], {nullable:true})
    OR?: Array<PokemonGameIndicesWhereInput>;

    @Field(() => [PokemonGameIndicesWhereInput], {nullable:true})
    NOT?: Array<PokemonGameIndicesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;

    @Field(() => PokemonScalarRelationFilter, {nullable:true})
    pokemon?: PokemonScalarRelationFilter;

    @Field(() => VersionsScalarRelationFilter, {nullable:true})
    version?: VersionsScalarRelationFilter;
}
