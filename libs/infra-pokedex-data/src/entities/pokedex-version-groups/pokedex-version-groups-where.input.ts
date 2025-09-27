import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { PokedexesScalarRelationFilter } from '../pokedexes/pokedexes-scalar-relation-filter.input';
import { VersionGroupsScalarRelationFilter } from '../version-groups/version-groups-scalar-relation-filter.input';

@InputType()
export class PokedexVersionGroupsWhereInput {

    @Field(() => [PokedexVersionGroupsWhereInput], {nullable:true})
    AND?: Array<PokedexVersionGroupsWhereInput>;

    @Field(() => [PokedexVersionGroupsWhereInput], {nullable:true})
    OR?: Array<PokedexVersionGroupsWhereInput>;

    @Field(() => [PokedexVersionGroupsWhereInput], {nullable:true})
    NOT?: Array<PokedexVersionGroupsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokedex_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => PokedexesScalarRelationFilter, {nullable:true})
    pokedex?: PokedexesScalarRelationFilter;

    @Field(() => VersionGroupsScalarRelationFilter, {nullable:true})
    versionGroup?: VersionGroupsScalarRelationFilter;
}
