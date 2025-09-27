import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RegionsNullableScalarRelationFilter } from '../regions/regions-nullable-scalar-relation-filter.input';
import { PokemonDexNumbersListRelationFilter } from '../pokemon-dex-numbers/pokemon-dex-numbers-list-relation-filter.input';
import { PokedexVersionGroupsListRelationFilter } from '../pokedex-version-groups/pokedex-version-groups-list-relation-filter.input';

@InputType()
export class PokedexesWhereInput {

    @Field(() => [PokedexesWhereInput], {nullable:true})
    AND?: Array<PokedexesWhereInput>;

    @Field(() => [PokedexesWhereInput], {nullable:true})
    OR?: Array<PokedexesWhereInput>;

    @Field(() => [PokedexesWhereInput], {nullable:true})
    NOT?: Array<PokedexesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    region_id?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    is_main_series?: IntFilter;

    @Field(() => RegionsNullableScalarRelationFilter, {nullable:true})
    region?: RegionsNullableScalarRelationFilter;

    @Field(() => PokemonDexNumbersListRelationFilter, {nullable:true})
    dexNumbers?: PokemonDexNumbersListRelationFilter;

    @Field(() => PokedexVersionGroupsListRelationFilter, {nullable:true})
    versionGroups?: PokedexVersionGroupsListRelationFilter;
}
