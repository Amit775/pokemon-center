import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionUpdateWithoutTradeSpeciesInput } from './pokemon-evolution-update-without-trade-species.input';

@InputType()
export class PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutTradeSpeciesInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutTradeSpeciesInput)
    data!: PokemonEvolutionUpdateWithoutTradeSpeciesInput;
}
