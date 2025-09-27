import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonSpeciesScalarRelationFilter } from '../pokemon-species/pokemon-species-scalar-relation-filter.input';
import { EggGroupsScalarRelationFilter } from '../egg-groups/egg-groups-scalar-relation-filter.input';

@InputType()
export class PokemonEggGroupsWhereInput {

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
