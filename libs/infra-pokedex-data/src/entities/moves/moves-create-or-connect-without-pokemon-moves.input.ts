import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutPokemonMovesInput } from './moves-create-without-pokemon-moves.input';

@InputType()
export class MovesCreateOrConnectWithoutPokemonMovesInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutPokemonMovesInput, {nullable:false})
    @Type(() => MovesCreateWithoutPokemonMovesInput)
    create!: Identity<MovesCreateWithoutPokemonMovesInput>;
}
