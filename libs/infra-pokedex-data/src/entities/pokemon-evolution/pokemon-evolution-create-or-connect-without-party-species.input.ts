import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonEvolutionCreateWithoutPartySpeciesInput } from './pokemon-evolution-create-without-party-species.input';

@InputType()
export class PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionCreateWithoutPartySpeciesInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutPartySpeciesInput)
    create!: Identity<PokemonEvolutionCreateWithoutPartySpeciesInput>;
}
