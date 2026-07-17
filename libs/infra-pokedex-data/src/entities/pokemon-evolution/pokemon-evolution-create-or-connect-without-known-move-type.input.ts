import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateWithoutKnownMoveTypeInput } from './pokemon-evolution-create-without-known-move-type.input';

@InputType()
export class PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionCreateWithoutKnownMoveTypeInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutKnownMoveTypeInput)
    create!: PokemonEvolutionCreateWithoutKnownMoveTypeInput;
}
