import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Regions } from '../regions/regions.model';
import { PokemonDexNumbers } from '../pokemon-dex-numbers/pokemon-dex-numbers.model';
import { PokedexVersionGroups } from '../pokedex-version-groups/pokedex-version-groups.model';
import { PokedexesCount } from './pokedexes-count.output';

/**
 * @@TypeGraphQL.type(name: "Pokedex")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Pokedex")'})
export class Pokedexes {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    region_id!: number | null;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_main_series!: number;

    @Field(() => Regions, {nullable:true})
    region?: Regions | null;

    @Field(() => [PokemonDexNumbers], {nullable:true})
    dexNumbers?: Array<PokemonDexNumbers>;

    @Field(() => [PokedexVersionGroups], {nullable:true})
    versionGroups?: Array<PokedexVersionGroups>;

    @Field(() => PokedexesCount, {nullable:false})
    _count?: PokedexesCount;
}
