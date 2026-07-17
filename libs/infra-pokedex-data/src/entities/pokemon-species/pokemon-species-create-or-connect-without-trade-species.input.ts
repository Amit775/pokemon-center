import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutTradeSpeciesInput } from './pokemon-species-create-without-trade-species.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutTradeSpeciesInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutTradeSpeciesInput)
    create!: PokemonSpeciesCreateWithoutTradeSpeciesInput;
}
