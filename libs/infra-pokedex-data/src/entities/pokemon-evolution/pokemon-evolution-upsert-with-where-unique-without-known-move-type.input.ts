import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionUpdateWithoutKnownMoveTypeInput } from './pokemon-evolution-update-without-known-move-type.input';
import { PokemonEvolutionCreateWithoutKnownMoveTypeInput } from './pokemon-evolution-create-without-known-move-type.input';

@InputType()
export class PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutKnownMoveTypeInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutKnownMoveTypeInput)
    update!: PokemonEvolutionUpdateWithoutKnownMoveTypeInput;

    @Field(() => PokemonEvolutionCreateWithoutKnownMoveTypeInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutKnownMoveTypeInput)
    create!: PokemonEvolutionCreateWithoutKnownMoveTypeInput;
}
