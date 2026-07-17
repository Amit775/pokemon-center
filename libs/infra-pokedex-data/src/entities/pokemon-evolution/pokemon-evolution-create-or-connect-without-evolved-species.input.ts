import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateWithoutEvolvedSpeciesInput } from './pokemon-evolution-create-without-evolved-species.input';

@InputType()
export class PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionCreateWithoutEvolvedSpeciesInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutEvolvedSpeciesInput)
    create!: PokemonEvolutionCreateWithoutEvolvedSpeciesInput;
}
