import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutPokemonMovesInput } from './moves-create-without-pokemon-moves.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutPokemonMovesInput } from './moves-create-or-connect-without-pokemon-moves.input';
import { MovesUpsertWithoutPokemonMovesInput } from './moves-upsert-without-pokemon-moves.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateToOneWithWhereWithoutPokemonMovesInput } from './moves-update-to-one-with-where-without-pokemon-moves.input';

@InputType()
export class MovesUpdateOneRequiredWithoutPokemonMovesNestedInput {

    @Field(() => MovesCreateWithoutPokemonMovesInput, {nullable:true})
    @Type(() => MovesCreateWithoutPokemonMovesInput)
    create?: Identity<MovesCreateWithoutPokemonMovesInput>;

    @Field(() => MovesCreateOrConnectWithoutPokemonMovesInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutPokemonMovesInput)
    connectOrCreate?: Identity<MovesCreateOrConnectWithoutPokemonMovesInput>;

    @Field(() => MovesUpsertWithoutPokemonMovesInput, {nullable:true})
    @Type(() => MovesUpsertWithoutPokemonMovesInput)
    upsert?: Identity<MovesUpsertWithoutPokemonMovesInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateToOneWithWhereWithoutPokemonMovesInput, {nullable:true})
    @Type(() => MovesUpdateToOneWithWhereWithoutPokemonMovesInput)
    update?: Identity<MovesUpdateToOneWithWhereWithoutPokemonMovesInput>;
}
