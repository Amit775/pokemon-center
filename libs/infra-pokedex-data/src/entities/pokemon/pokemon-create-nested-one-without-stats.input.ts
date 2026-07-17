import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonCreateWithoutStatsInput } from './pokemon-create-without-stats.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutStatsInput } from './pokemon-create-or-connect-without-stats.input';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class PokemonCreateNestedOneWithoutStatsInput {

    @Field(() => PokemonCreateWithoutStatsInput, {nullable:true})
    @Type(() => PokemonCreateWithoutStatsInput)
    create?: PokemonCreateWithoutStatsInput;

    @Field(() => PokemonCreateOrConnectWithoutStatsInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutStatsInput)
    connectOrCreate?: PokemonCreateOrConnectWithoutStatsInput;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;
}
