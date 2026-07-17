import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokedexesWhereInput } from './pokedexes-where.input';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RegionsScalarRelationFilter } from '../regions/regions-scalar-relation-filter.input';
import { PokemonDexNumbersListRelationFilter } from '../pokemon-dex-numbers/pokemon-dex-numbers-list-relation-filter.input';
import { PokedexVersionGroupsListRelationFilter } from '../pokedex-version-groups/pokedex-version-groups-list-relation-filter.input';

@InputType()
export class PokedexesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [PokedexesWhereInput], {nullable:true})
    AND?: Array<PokedexesWhereInput>;

    @Field(() => [PokedexesWhereInput], {nullable:true})
    OR?: Array<PokedexesWhereInput>;

    @Field(() => [PokedexesWhereInput], {nullable:true})
    NOT?: Array<PokedexesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    region_id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_main_series?: Identity<IntFilter>;

    @Field(() => RegionsScalarRelationFilter, {nullable:true})
    region?: Identity<RegionsScalarRelationFilter>;

    @Field(() => PokemonDexNumbersListRelationFilter, {nullable:true})
    dexNumbers?: Identity<PokemonDexNumbersListRelationFilter>;

    @Field(() => PokedexVersionGroupsListRelationFilter, {nullable:true})
    versionGroups?: Identity<PokedexVersionGroupsListRelationFilter>;
}
