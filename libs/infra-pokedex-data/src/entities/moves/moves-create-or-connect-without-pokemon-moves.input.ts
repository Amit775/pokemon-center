import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutPokemonMovesInput } from './moves-create-without-pokemon-moves.input';

@InputType()
export class MovesCreateOrConnectWithoutPokemonMovesInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutPokemonMovesInput, {nullable:false})
    @Type(() => MovesCreateWithoutPokemonMovesInput)
    create!: MovesCreateWithoutPokemonMovesInput;
}
