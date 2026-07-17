import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUpdateWithoutTradeSpeciesInput } from './pokemon-evolution-update-without-trade-species.input';
import { PokemonEvolutionCreateWithoutTradeSpeciesInput } from './pokemon-evolution-create-without-trade-species.input';

@InputType()
export class PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutTradeSpeciesInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutTradeSpeciesInput)
    update!: Identity<PokemonEvolutionUpdateWithoutTradeSpeciesInput>;

    @Field(() => PokemonEvolutionCreateWithoutTradeSpeciesInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutTradeSpeciesInput)
    create!: Identity<PokemonEvolutionCreateWithoutTradeSpeciesInput>;
}
