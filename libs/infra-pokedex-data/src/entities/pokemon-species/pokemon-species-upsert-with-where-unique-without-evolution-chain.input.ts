import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateWithoutEvolutionChainInput } from './pokemon-species-update-without-evolution-chain.input';
import { PokemonSpeciesCreateWithoutEvolutionChainInput } from './pokemon-species-create-without-evolution-chain.input';

@InputType()
export class PokemonSpeciesUpsertWithWhereUniqueWithoutEvolutionChainInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateWithoutEvolutionChainInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutEvolutionChainInput)
    update!: Identity<PokemonSpeciesUpdateWithoutEvolutionChainInput>;

    @Field(() => PokemonSpeciesCreateWithoutEvolutionChainInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutEvolutionChainInput)
    create!: Identity<PokemonSpeciesCreateWithoutEvolutionChainInput>;
}
