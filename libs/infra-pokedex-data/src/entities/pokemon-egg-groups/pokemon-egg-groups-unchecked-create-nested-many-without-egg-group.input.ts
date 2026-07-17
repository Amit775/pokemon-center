import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEggGroupsCreateWithoutEggGroupInput } from './pokemon-egg-groups-create-without-egg-group.input';
import { Type } from 'class-transformer';
import { PokemonEggGroupsCreateOrConnectWithoutEggGroupInput } from './pokemon-egg-groups-create-or-connect-without-egg-group.input';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsCreateManyEggGroupInputEnvelope } from './pokemon-egg-groups-create-many-egg-group-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEggGroupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';

@InputType()
export class PokemonEggGroupsUncheckedCreateNestedManyWithoutEggGroupInput {

    @Field(() => [PokemonEggGroupsCreateWithoutEggGroupInput], {nullable:true})
    @Type(() => PokemonEggGroupsCreateWithoutEggGroupInput)
    create?: Array<PokemonEggGroupsCreateWithoutEggGroupInput>;

    @Field(() => [PokemonEggGroupsCreateOrConnectWithoutEggGroupInput], {nullable:true})
    @Type(() => PokemonEggGroupsCreateOrConnectWithoutEggGroupInput)
    connectOrCreate?: Array<PokemonEggGroupsCreateOrConnectWithoutEggGroupInput>;

    @Field(() => PokemonEggGroupsCreateManyEggGroupInputEnvelope, {nullable:true})
    @Type(() => PokemonEggGroupsCreateManyEggGroupInputEnvelope)
    createMany?: Identity<PokemonEggGroupsCreateManyEggGroupInputEnvelope>;

    @Field(() => [PokemonEggGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEggGroupsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>>;
}
