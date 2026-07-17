import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutEvolutionChainInput } from './pokemon-species-create-without-evolution-chain.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput } from './pokemon-species-create-or-connect-without-evolution-chain.input';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateManyEvolutionChainInputEnvelope } from './pokemon-species-create-many-evolution-chain-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput {

    @Field(() => [PokemonSpeciesCreateWithoutEvolutionChainInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutEvolutionChainInput)
    create?: Array<PokemonSpeciesCreateWithoutEvolutionChainInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput>;

    @Field(() => PokemonSpeciesCreateManyEvolutionChainInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyEvolutionChainInputEnvelope)
    createMany?: Identity<PokemonSpeciesCreateManyEvolutionChainInputEnvelope>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;
}
