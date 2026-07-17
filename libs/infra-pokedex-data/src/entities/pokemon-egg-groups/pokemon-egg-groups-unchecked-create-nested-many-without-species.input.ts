import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEggGroupsCreateWithoutSpeciesInput } from './pokemon-egg-groups-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonEggGroupsCreateOrConnectWithoutSpeciesInput } from './pokemon-egg-groups-create-or-connect-without-species.input';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsCreateManySpeciesInputEnvelope } from './pokemon-egg-groups-create-many-species-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEggGroupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';

@InputType()
export class PokemonEggGroupsUncheckedCreateNestedManyWithoutSpeciesInput {

    @Field(() => [PokemonEggGroupsCreateWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonEggGroupsCreateWithoutSpeciesInput)
    create?: Array<PokemonEggGroupsCreateWithoutSpeciesInput>;

    @Field(() => [PokemonEggGroupsCreateOrConnectWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonEggGroupsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Array<PokemonEggGroupsCreateOrConnectWithoutSpeciesInput>;

    @Field(() => PokemonEggGroupsCreateManySpeciesInputEnvelope, {nullable:true})
    @Type(() => PokemonEggGroupsCreateManySpeciesInputEnvelope)
    createMany?: Identity<PokemonEggGroupsCreateManySpeciesInputEnvelope>;

    @Field(() => [PokemonEggGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEggGroupsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>>;
}
