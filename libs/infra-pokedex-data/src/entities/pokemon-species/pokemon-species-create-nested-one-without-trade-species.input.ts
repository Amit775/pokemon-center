import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutTradeSpeciesInput } from './pokemon-species-create-without-trade-species.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput } from './pokemon-species-create-or-connect-without-trade-species.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput {

    @Field(() => PokemonSpeciesCreateWithoutTradeSpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutTradeSpeciesInput)
    create?: Identity<PokemonSpeciesCreateWithoutTradeSpeciesInput>;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput)
    connectOrCreate?: Identity<PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput>;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;
}
