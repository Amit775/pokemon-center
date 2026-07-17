import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUpdateWithoutKnownMoveTypeInput } from './pokemon-evolution-update-without-known-move-type.input';

@InputType()
export class PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutKnownMoveTypeInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutKnownMoveTypeInput)
    data!: Identity<PokemonEvolutionUpdateWithoutKnownMoveTypeInput>;
}
