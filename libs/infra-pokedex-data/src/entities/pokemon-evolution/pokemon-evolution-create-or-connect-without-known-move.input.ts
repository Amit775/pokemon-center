import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateWithoutKnownMoveInput } from './pokemon-evolution-create-without-known-move.input';

@InputType()
export class PokemonEvolutionCreateOrConnectWithoutKnownMoveInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionCreateWithoutKnownMoveInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutKnownMoveInput)
    create!: PokemonEvolutionCreateWithoutKnownMoveInput;
}
