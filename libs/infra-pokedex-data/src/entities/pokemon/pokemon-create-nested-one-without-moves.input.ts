import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateWithoutMovesInput } from './pokemon-create-without-moves.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutMovesInput } from './pokemon-create-or-connect-without-moves.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class PokemonCreateNestedOneWithoutMovesInput {

    @Field(() => PokemonCreateWithoutMovesInput, {nullable:true})
    @Type(() => PokemonCreateWithoutMovesInput)
    create?: Identity<PokemonCreateWithoutMovesInput>;

    @Field(() => PokemonCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Identity<PokemonCreateOrConnectWithoutMovesInput>;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;
}
