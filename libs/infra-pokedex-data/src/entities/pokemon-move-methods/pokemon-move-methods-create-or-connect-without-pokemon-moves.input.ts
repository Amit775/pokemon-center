import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonMoveMethodsWhereUniqueInput } from './pokemon-move-methods-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsCreateWithoutPokemonMovesInput } from './pokemon-move-methods-create-without-pokemon-moves.input';

@InputType()
export class PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput {

    @Field(() => PokemonMoveMethodsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonMoveMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonMoveMethodsWhereUniqueInput, 'id'>;

    @Field(() => PokemonMoveMethodsCreateWithoutPokemonMovesInput, {nullable:false})
    @Type(() => PokemonMoveMethodsCreateWithoutPokemonMovesInput)
    create!: PokemonMoveMethodsCreateWithoutPokemonMovesInput;
}
