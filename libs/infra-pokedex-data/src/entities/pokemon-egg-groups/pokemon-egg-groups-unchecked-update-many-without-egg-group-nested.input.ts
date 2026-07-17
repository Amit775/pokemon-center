import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEggGroupsCreateWithoutEggGroupInput } from './pokemon-egg-groups-create-without-egg-group.input';
import { Type } from 'class-transformer';
import { PokemonEggGroupsCreateOrConnectWithoutEggGroupInput } from './pokemon-egg-groups-create-or-connect-without-egg-group.input';
import { PokemonEggGroupsUpsertWithWhereUniqueWithoutEggGroupInput } from './pokemon-egg-groups-upsert-with-where-unique-without-egg-group.input';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsCreateManyEggGroupInputEnvelope } from './pokemon-egg-groups-create-many-egg-group-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEggGroupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';
import { PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput } from './pokemon-egg-groups-update-with-where-unique-without-egg-group.input';
import { PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput } from './pokemon-egg-groups-update-many-with-where-without-egg-group.input';
import { PokemonEggGroupsScalarWhereInput } from './pokemon-egg-groups-scalar-where.input';

@InputType()
export class PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupNestedInput {

    @Field(() => [PokemonEggGroupsCreateWithoutEggGroupInput], {nullable:true})
    @Type(() => PokemonEggGroupsCreateWithoutEggGroupInput)
    create?: Array<PokemonEggGroupsCreateWithoutEggGroupInput>;

    @Field(() => [PokemonEggGroupsCreateOrConnectWithoutEggGroupInput], {nullable:true})
    @Type(() => PokemonEggGroupsCreateOrConnectWithoutEggGroupInput)
    connectOrCreate?: Array<PokemonEggGroupsCreateOrConnectWithoutEggGroupInput>;

    @Field(() => [PokemonEggGroupsUpsertWithWhereUniqueWithoutEggGroupInput], {nullable:true})
    @Type(() => PokemonEggGroupsUpsertWithWhereUniqueWithoutEggGroupInput)
    upsert?: Array<PokemonEggGroupsUpsertWithWhereUniqueWithoutEggGroupInput>;

    @Field(() => PokemonEggGroupsCreateManyEggGroupInputEnvelope, {nullable:true})
    @Type(() => PokemonEggGroupsCreateManyEggGroupInputEnvelope)
    createMany?: Identity<PokemonEggGroupsCreateManyEggGroupInputEnvelope>;

    @Field(() => [PokemonEggGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEggGroupsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>>;

    @Field(() => [PokemonEggGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEggGroupsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>>;

    @Field(() => [PokemonEggGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEggGroupsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>>;

    @Field(() => [PokemonEggGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEggGroupsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>>;

    @Field(() => [PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput], {nullable:true})
    @Type(() => PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput)
    update?: Array<PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput>;

    @Field(() => [PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput], {nullable:true})
    @Type(() => PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput)
    updateMany?: Array<PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput>;

    @Field(() => [PokemonEggGroupsScalarWhereInput], {nullable:true})
    @Type(() => PokemonEggGroupsScalarWhereInput)
    deleteMany?: Array<PokemonEggGroupsScalarWhereInput>;
}
