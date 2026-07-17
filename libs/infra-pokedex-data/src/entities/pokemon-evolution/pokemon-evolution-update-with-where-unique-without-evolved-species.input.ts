import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUpdateWithoutEvolvedSpeciesInput } from './pokemon-evolution-update-without-evolved-species.input';

@InputType()
export class PokemonEvolutionUpdateWithWhereUniqueWithoutEvolvedSpeciesInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutEvolvedSpeciesInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutEvolvedSpeciesInput)
    data!: Identity<PokemonEvolutionUpdateWithoutEvolvedSpeciesInput>;
}
