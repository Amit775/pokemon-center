import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutKnownMoveInput } from './pokemon-evolution-create-without-known-move.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutKnownMoveInput } from './pokemon-evolution-create-or-connect-without-known-move.input';
import { PokemonEvolutionCreateManyKnownMoveInputEnvelope } from './pokemon-evolution-create-many-known-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class PokemonEvolutionUncheckedCreateNestedManyWithoutKnownMoveInput {

    @Field(() => [PokemonEvolutionCreateWithoutKnownMoveInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutKnownMoveInput)
    create?: Array<PokemonEvolutionCreateWithoutKnownMoveInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutKnownMoveInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutKnownMoveInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutKnownMoveInput>;

    @Field(() => PokemonEvolutionCreateManyKnownMoveInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyKnownMoveInputEnvelope)
    createMany?: PokemonEvolutionCreateManyKnownMoveInputEnvelope;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;
}
