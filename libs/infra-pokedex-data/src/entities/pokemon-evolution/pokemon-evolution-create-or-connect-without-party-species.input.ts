import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateWithoutPartySpeciesInput } from './pokemon-evolution-create-without-party-species.input';

@InputType()
export class PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionCreateWithoutPartySpeciesInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutPartySpeciesInput)
    create!: PokemonEvolutionCreateWithoutPartySpeciesInput;
}
