import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutEvolvesFromInput } from './pokemon-species-create-without-evolves-from.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput } from './pokemon-species-create-or-connect-without-evolves-from.input';
import { PokemonSpeciesUpsertWithWhereUniqueWithoutEvolvesFromInput } from './pokemon-species-upsert-with-where-unique-without-evolves-from.input';
import { PokemonSpeciesCreateManyEvolvesFromInputEnvelope } from './pokemon-species-create-many-evolves-from-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateWithWhereUniqueWithoutEvolvesFromInput } from './pokemon-species-update-with-where-unique-without-evolves-from.input';
import { PokemonSpeciesUpdateManyWithWhereWithoutEvolvesFromInput } from './pokemon-species-update-many-with-where-without-evolves-from.input';
import { PokemonSpeciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class PokemonSpeciesUncheckedUpdateManyWithoutEvolvesFromNestedInput {

    @Field(() => [PokemonSpeciesCreateWithoutEvolvesFromInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutEvolvesFromInput)
    create?: Array<PokemonSpeciesCreateWithoutEvolvesFromInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput>;

    @Field(() => [PokemonSpeciesUpsertWithWhereUniqueWithoutEvolvesFromInput], {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithWhereUniqueWithoutEvolvesFromInput)
    upsert?: Array<PokemonSpeciesUpsertWithWhereUniqueWithoutEvolvesFromInput>;

    @Field(() => PokemonSpeciesCreateManyEvolvesFromInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyEvolvesFromInputEnvelope)
    createMany?: PokemonSpeciesCreateManyEvolvesFromInputEnvelope;

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

    @Field(() => [PokemonSpeciesUpdateWithWhereUniqueWithoutEvolvesFromInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateWithWhereUniqueWithoutEvolvesFromInput)
    update?: Array<PokemonSpeciesUpdateWithWhereUniqueWithoutEvolvesFromInput>;

    @Field(() => [PokemonSpeciesUpdateManyWithWhereWithoutEvolvesFromInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateManyWithWhereWithoutEvolvesFromInput)
    updateMany?: Array<PokemonSpeciesUpdateManyWithWhereWithoutEvolvesFromInput>;

    @Field(() => [PokemonSpeciesScalarWhereInput], {nullable:true})
    @Type(() => PokemonSpeciesScalarWhereInput)
    deleteMany?: Array<PokemonSpeciesScalarWhereInput>;
}
