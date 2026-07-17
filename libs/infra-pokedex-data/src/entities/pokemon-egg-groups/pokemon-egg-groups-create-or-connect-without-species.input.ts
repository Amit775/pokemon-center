import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEggGroupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEggGroupsCreateWithoutSpeciesInput } from './pokemon-egg-groups-create-without-species.input';

@InputType()
export class PokemonEggGroupsCreateOrConnectWithoutSpeciesInput {

    @Field(() => PokemonEggGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEggGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>;

    @Field(() => PokemonEggGroupsCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonEggGroupsCreateWithoutSpeciesInput)
    create!: PokemonEggGroupsCreateWithoutSpeciesInput;
}
