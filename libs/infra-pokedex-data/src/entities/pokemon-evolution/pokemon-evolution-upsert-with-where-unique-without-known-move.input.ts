import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUpdateWithoutKnownMoveInput } from './pokemon-evolution-update-without-known-move.input';
import { PokemonEvolutionCreateWithoutKnownMoveInput } from './pokemon-evolution-create-without-known-move.input';

@InputType()
export class PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutKnownMoveInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutKnownMoveInput)
    update!: Identity<PokemonEvolutionUpdateWithoutKnownMoveInput>;

    @Field(() => PokemonEvolutionCreateWithoutKnownMoveInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutKnownMoveInput)
    create!: Identity<PokemonEvolutionCreateWithoutKnownMoveInput>;
}
