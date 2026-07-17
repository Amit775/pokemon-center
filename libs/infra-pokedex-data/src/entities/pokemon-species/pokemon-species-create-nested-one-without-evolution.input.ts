import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutEvolutionInput } from './pokemon-species-create-without-evolution.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutEvolutionInput } from './pokemon-species-create-or-connect-without-evolution.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesCreateNestedOneWithoutEvolutionInput {

    @Field(() => PokemonSpeciesCreateWithoutEvolutionInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutEvolutionInput)
    create?: Identity<PokemonSpeciesCreateWithoutEvolutionInput>;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutEvolutionInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutEvolutionInput)
    connectOrCreate?: Identity<PokemonSpeciesCreateOrConnectWithoutEvolutionInput>;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;
}
