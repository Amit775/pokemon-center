import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutMovesInput } from './pokemon-create-without-moves.input';

@InputType()
export class PokemonCreateOrConnectWithoutMovesInput {

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonCreateWithoutMovesInput, {nullable:false})
    @Type(() => PokemonCreateWithoutMovesInput)
    create!: PokemonCreateWithoutMovesInput;
}
