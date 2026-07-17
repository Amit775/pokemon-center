import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutPokemonMovesInput } from './moves-create-without-pokemon-moves.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutPokemonMovesInput } from './moves-create-or-connect-without-pokemon-moves.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedOneWithoutPokemonMovesInput {

    @Field(() => MovesCreateWithoutPokemonMovesInput, {nullable:true})
    @Type(() => MovesCreateWithoutPokemonMovesInput)
    create?: Identity<MovesCreateWithoutPokemonMovesInput>;

    @Field(() => MovesCreateOrConnectWithoutPokemonMovesInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutPokemonMovesInput)
    connectOrCreate?: Identity<MovesCreateOrConnectWithoutPokemonMovesInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;
}
