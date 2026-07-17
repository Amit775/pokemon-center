import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateWithoutGameIndicesInput } from './pokemon-create-without-game-indices.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutGameIndicesInput } from './pokemon-create-or-connect-without-game-indices.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class PokemonCreateNestedOneWithoutGameIndicesInput {

    @Field(() => PokemonCreateWithoutGameIndicesInput, {nullable:true})
    @Type(() => PokemonCreateWithoutGameIndicesInput)
    create?: Identity<PokemonCreateWithoutGameIndicesInput>;

    @Field(() => PokemonCreateOrConnectWithoutGameIndicesInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutGameIndicesInput)
    connectOrCreate?: Identity<PokemonCreateOrConnectWithoutGameIndicesInput>;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;
}
