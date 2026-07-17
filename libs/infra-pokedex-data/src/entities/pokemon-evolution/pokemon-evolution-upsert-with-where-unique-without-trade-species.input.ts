import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionUpdateWithoutTradeSpeciesInput } from './pokemon-evolution-update-without-trade-species.input';
import { PokemonEvolutionCreateWithoutTradeSpeciesInput } from './pokemon-evolution-create-without-trade-species.input';

@InputType()
export class PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutTradeSpeciesInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutTradeSpeciesInput)
    update!: PokemonEvolutionUpdateWithoutTradeSpeciesInput;

    @Field(() => PokemonEvolutionCreateWithoutTradeSpeciesInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutTradeSpeciesInput)
    create!: PokemonEvolutionCreateWithoutTradeSpeciesInput;
}
