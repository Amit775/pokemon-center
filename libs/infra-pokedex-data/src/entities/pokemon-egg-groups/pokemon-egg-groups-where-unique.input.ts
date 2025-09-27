import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEggGroupsSpecies_idEgg_group_idCompoundUniqueInput } from './pokemon-egg-groups-species-id-egg-group-id-compound-unique.input';
import { PokemonEggGroupsWhereInput } from './pokemon-egg-groups-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonSpeciesScalarRelationFilter } from '../pokemon-species/pokemon-species-scalar-relation-filter.input';
import { EggGroupsScalarRelationFilter } from '../egg-groups/egg-groups-scalar-relation-filter.input';

@InputType()
export class PokemonEggGroupsWhereUniqueInput {

    @Field(() => PokemonEggGroupsSpecies_idEgg_group_idCompoundUniqueInput, {nullable:true})
    species_id_egg_group_id?: PokemonEggGroupsSpecies_idEgg_group_idCompoundUniqueInput;

    @Field(() => [PokemonEggGroupsWhereInput], {nullable:true})
    AND?: Array<PokemonEggGroupsWhereInput>;

    @Field(() => [PokemonEggGroupsWhereInput], {nullable:true})
    OR?: Array<PokemonEggGroupsWhereInput>;

    @Field(() => [PokemonEggGroupsWhereInput], {nullable:true})
    NOT?: Array<PokemonEggGroupsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    egg_group_id?: IntFilter;

    @Field(() => PokemonSpeciesScalarRelationFilter, {nullable:true})
    species?: PokemonSpeciesScalarRelationFilter;

    @Field(() => EggGroupsScalarRelationFilter, {nullable:true})
    eggGroup?: EggGroupsScalarRelationFilter;
}
