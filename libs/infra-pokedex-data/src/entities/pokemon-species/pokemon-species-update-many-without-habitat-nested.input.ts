import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutHabitatInput } from './pokemon-species-create-without-habitat.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutHabitatInput } from './pokemon-species-create-or-connect-without-habitat.input';
import { PokemonSpeciesUpsertWithWhereUniqueWithoutHabitatInput } from './pokemon-species-upsert-with-where-unique-without-habitat.input';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateManyHabitatInputEnvelope } from './pokemon-species-create-many-habitat-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateWithWhereUniqueWithoutHabitatInput } from './pokemon-species-update-with-where-unique-without-habitat.input';
import { PokemonSpeciesUpdateManyWithWhereWithoutHabitatInput } from './pokemon-species-update-many-with-where-without-habitat.input';
import { PokemonSpeciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class PokemonSpeciesUpdateManyWithoutHabitatNestedInput {

    @Field(() => [PokemonSpeciesCreateWithoutHabitatInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutHabitatInput)
    create?: Array<PokemonSpeciesCreateWithoutHabitatInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutHabitatInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutHabitatInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutHabitatInput>;

    @Field(() => [PokemonSpeciesUpsertWithWhereUniqueWithoutHabitatInput], {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithWhereUniqueWithoutHabitatInput)
    upsert?: Array<PokemonSpeciesUpsertWithWhereUniqueWithoutHabitatInput>;

    @Field(() => PokemonSpeciesCreateManyHabitatInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyHabitatInputEnvelope)
    createMany?: Identity<PokemonSpeciesCreateManyHabitatInputEnvelope>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesUpdateWithWhereUniqueWithoutHabitatInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateWithWhereUniqueWithoutHabitatInput)
    update?: Array<PokemonSpeciesUpdateWithWhereUniqueWithoutHabitatInput>;

    @Field(() => [PokemonSpeciesUpdateManyWithWhereWithoutHabitatInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateManyWithWhereWithoutHabitatInput)
    updateMany?: Array<PokemonSpeciesUpdateManyWithWhereWithoutHabitatInput>;

    @Field(() => [PokemonSpeciesScalarWhereInput], {nullable:true})
    @Type(() => PokemonSpeciesScalarWhereInput)
    deleteMany?: Array<PokemonSpeciesScalarWhereInput>;
}
