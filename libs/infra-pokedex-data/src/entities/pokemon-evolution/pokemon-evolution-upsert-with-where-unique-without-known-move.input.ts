import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionUpdateWithoutKnownMoveInput } from './pokemon-evolution-update-without-known-move.input';
import { PokemonEvolutionCreateWithoutKnownMoveInput } from './pokemon-evolution-create-without-known-move.input';

@InputType()
export class PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutKnownMoveInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutKnownMoveInput)
    update!: PokemonEvolutionUpdateWithoutKnownMoveInput;

    @Field(() => PokemonEvolutionCreateWithoutKnownMoveInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutKnownMoveInput)
    create!: PokemonEvolutionCreateWithoutKnownMoveInput;
}
