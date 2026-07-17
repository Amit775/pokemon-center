import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutKnownMoveTypeInput } from './pokemon-evolution-create-without-known-move-type.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput } from './pokemon-evolution-create-or-connect-without-known-move-type.input';
import type { Identity } from 'identity-type';
import { PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope } from './pokemon-evolution-create-many-known-move-type-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput {

    @Field(() => [PokemonEvolutionCreateWithoutKnownMoveTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutKnownMoveTypeInput)
    create?: Array<PokemonEvolutionCreateWithoutKnownMoveTypeInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput>;

    @Field(() => PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope)
    createMany?: Identity<PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;
}
