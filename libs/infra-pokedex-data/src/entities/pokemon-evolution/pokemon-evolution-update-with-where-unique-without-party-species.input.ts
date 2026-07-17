import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionUpdateWithoutPartySpeciesInput } from './pokemon-evolution-update-without-party-species.input';

@InputType()
export class PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutPartySpeciesInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutPartySpeciesInput)
    data!: PokemonEvolutionUpdateWithoutPartySpeciesInput;
}
