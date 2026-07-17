import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutKnownMoveInput } from './pokemon-evolution-create-without-known-move.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutKnownMoveInput } from './pokemon-evolution-create-or-connect-without-known-move.input';
import { PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput } from './pokemon-evolution-upsert-with-where-unique-without-known-move.input';
import { PokemonEvolutionCreateManyKnownMoveInputEnvelope } from './pokemon-evolution-create-many-known-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput } from './pokemon-evolution-update-with-where-unique-without-known-move.input';
import { PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveInput } from './pokemon-evolution-update-many-with-where-without-known-move.input';
import { PokemonEvolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput {

    @Field(() => [PokemonEvolutionCreateWithoutKnownMoveInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutKnownMoveInput)
    create?: Array<PokemonEvolutionCreateWithoutKnownMoveInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutKnownMoveInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutKnownMoveInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutKnownMoveInput>;

    @Field(() => [PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput], {nullable:true})
    @Type(() => PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput)
    upsert?: Array<PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput>;

    @Field(() => PokemonEvolutionCreateManyKnownMoveInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyKnownMoveInputEnvelope)
    createMany?: PokemonEvolutionCreateManyKnownMoveInputEnvelope;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput)
    update?: Array<PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput>;

    @Field(() => [PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveInput)
    updateMany?: Array<PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    @Type(() => PokemonEvolutionScalarWhereInput)
    deleteMany?: Array<PokemonEvolutionScalarWhereInput>;
}
