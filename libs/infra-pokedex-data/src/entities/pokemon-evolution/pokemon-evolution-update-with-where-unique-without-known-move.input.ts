import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionUpdateWithoutKnownMoveInput } from './pokemon-evolution-update-without-known-move.input';

@InputType()
export class PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutKnownMoveInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutKnownMoveInput)
    data!: PokemonEvolutionUpdateWithoutKnownMoveInput;
}
