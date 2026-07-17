import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEggGroupsCreateWithoutSpeciesInput } from './pokemon-egg-groups-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonEggGroupsCreateOrConnectWithoutSpeciesInput } from './pokemon-egg-groups-create-or-connect-without-species.input';
import { PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput } from './pokemon-egg-groups-upsert-with-where-unique-without-species.input';
import { PokemonEggGroupsCreateManySpeciesInputEnvelope } from './pokemon-egg-groups-create-many-species-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEggGroupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';
import { PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput } from './pokemon-egg-groups-update-with-where-unique-without-species.input';
import { PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput } from './pokemon-egg-groups-update-many-with-where-without-species.input';
import { PokemonEggGroupsScalarWhereInput } from './pokemon-egg-groups-scalar-where.input';

@InputType()
export class PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesNestedInput {

    @Field(() => [PokemonEggGroupsCreateWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonEggGroupsCreateWithoutSpeciesInput)
    create?: Array<PokemonEggGroupsCreateWithoutSpeciesInput>;

    @Field(() => [PokemonEggGroupsCreateOrConnectWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonEggGroupsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Array<PokemonEggGroupsCreateOrConnectWithoutSpeciesInput>;

    @Field(() => [PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput)
    upsert?: Array<PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput>;

    @Field(() => PokemonEggGroupsCreateManySpeciesInputEnvelope, {nullable:true})
    @Type(() => PokemonEggGroupsCreateManySpeciesInputEnvelope)
    createMany?: PokemonEggGroupsCreateManySpeciesInputEnvelope;

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

    @Field(() => [PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput)
    update?: Array<PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput>;

    @Field(() => [PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput)
    updateMany?: Array<PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput>;

    @Field(() => [PokemonEggGroupsScalarWhereInput], {nullable:true})
    @Type(() => PokemonEggGroupsScalarWhereInput)
    deleteMany?: Array<PokemonEggGroupsScalarWhereInput>;
}
