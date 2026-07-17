import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutGenerationInput } from './pokemon-species-create-without-generation.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutGenerationInput } from './pokemon-species-create-or-connect-without-generation.input';
import { PokemonSpeciesUpsertWithWhereUniqueWithoutGenerationInput } from './pokemon-species-upsert-with-where-unique-without-generation.input';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateManyGenerationInputEnvelope } from './pokemon-species-create-many-generation-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateWithWhereUniqueWithoutGenerationInput } from './pokemon-species-update-with-where-unique-without-generation.input';
import { PokemonSpeciesUpdateManyWithWhereWithoutGenerationInput } from './pokemon-species-update-many-with-where-without-generation.input';
import { PokemonSpeciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class PokemonSpeciesUpdateManyWithoutGenerationNestedInput {

    @Field(() => [PokemonSpeciesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutGenerationInput)
    create?: Array<PokemonSpeciesCreateWithoutGenerationInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutGenerationInput>;

    @Field(() => [PokemonSpeciesUpsertWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithWhereUniqueWithoutGenerationInput)
    upsert?: Array<PokemonSpeciesUpsertWithWhereUniqueWithoutGenerationInput>;

    @Field(() => PokemonSpeciesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyGenerationInputEnvelope)
    createMany?: Identity<PokemonSpeciesCreateManyGenerationInputEnvelope>;

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

    @Field(() => [PokemonSpeciesUpdateWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateWithWhereUniqueWithoutGenerationInput)
    update?: Array<PokemonSpeciesUpdateWithWhereUniqueWithoutGenerationInput>;

    @Field(() => [PokemonSpeciesUpdateManyWithWhereWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateManyWithWhereWithoutGenerationInput)
    updateMany?: Array<PokemonSpeciesUpdateManyWithWhereWithoutGenerationInput>;

    @Field(() => [PokemonSpeciesScalarWhereInput], {nullable:true})
    @Type(() => PokemonSpeciesScalarWhereInput)
    deleteMany?: Array<PokemonSpeciesScalarWhereInput>;
}
