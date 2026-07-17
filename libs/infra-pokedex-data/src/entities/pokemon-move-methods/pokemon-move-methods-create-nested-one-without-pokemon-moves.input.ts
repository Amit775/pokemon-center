import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMoveMethodsCreateWithoutPokemonMovesInput } from './pokemon-move-methods-create-without-pokemon-moves.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput } from './pokemon-move-methods-create-or-connect-without-pokemon-moves.input';
import { Prisma } from '@prisma/client';
import { PokemonMoveMethodsWhereUniqueInput } from './pokemon-move-methods-where-unique.input';

@InputType()
export class PokemonMoveMethodsCreateNestedOneWithoutPokemonMovesInput {

    @Field(() => PokemonMoveMethodsCreateWithoutPokemonMovesInput, {nullable:true})
    @Type(() => PokemonMoveMethodsCreateWithoutPokemonMovesInput)
    create?: PokemonMoveMethodsCreateWithoutPokemonMovesInput;

    @Field(() => PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput, {nullable:true})
    @Type(() => PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput)
    connectOrCreate?: PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput;

    @Field(() => PokemonMoveMethodsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonMoveMethodsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonMoveMethodsWhereUniqueInput, 'id'>;
}
