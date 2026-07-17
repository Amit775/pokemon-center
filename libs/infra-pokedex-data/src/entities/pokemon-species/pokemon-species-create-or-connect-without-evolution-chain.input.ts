import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutEvolutionChainInput } from './pokemon-species-create-without-evolution-chain.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutEvolutionChainInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutEvolutionChainInput)
    create!: PokemonSpeciesCreateWithoutEvolutionChainInput;
}
