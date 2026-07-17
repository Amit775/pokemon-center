import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionUpdateWithoutEvolvedSpeciesInput } from './pokemon-evolution-update-without-evolved-species.input';
import { PokemonEvolutionCreateWithoutEvolvedSpeciesInput } from './pokemon-evolution-create-without-evolved-species.input';

@InputType()
export class PokemonEvolutionUpsertWithWhereUniqueWithoutEvolvedSpeciesInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutEvolvedSpeciesInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutEvolvedSpeciesInput)
    update!: PokemonEvolutionUpdateWithoutEvolvedSpeciesInput;

    @Field(() => PokemonEvolutionCreateWithoutEvolvedSpeciesInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutEvolvedSpeciesInput)
    create!: PokemonEvolutionCreateWithoutEvolvedSpeciesInput;
}
