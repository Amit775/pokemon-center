import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEggGroupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsUpdateWithoutSpeciesInput } from './pokemon-egg-groups-update-without-species.input';

@InputType()
export class PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput {

    @Field(() => PokemonEggGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEggGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>;

    @Field(() => PokemonEggGroupsUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonEggGroupsUpdateWithoutSpeciesInput)
    data!: Identity<PokemonEggGroupsUpdateWithoutSpeciesInput>;
}
