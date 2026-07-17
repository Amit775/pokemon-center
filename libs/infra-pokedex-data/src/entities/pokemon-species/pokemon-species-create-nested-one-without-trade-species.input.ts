import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutTradeSpeciesInput } from './pokemon-species-create-without-trade-species.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput } from './pokemon-species-create-or-connect-without-trade-species.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput {

    @Field(() => PokemonSpeciesCreateWithoutTradeSpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutTradeSpeciesInput)
    create?: PokemonSpeciesCreateWithoutTradeSpeciesInput;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput)
    connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;
}
