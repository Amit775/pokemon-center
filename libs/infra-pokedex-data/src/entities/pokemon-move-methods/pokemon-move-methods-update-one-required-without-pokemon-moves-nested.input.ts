import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMoveMethodsCreateWithoutPokemonMovesInput } from './pokemon-move-methods-create-without-pokemon-moves.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput } from './pokemon-move-methods-create-or-connect-without-pokemon-moves.input';
import { PokemonMoveMethodsUpsertWithoutPokemonMovesInput } from './pokemon-move-methods-upsert-without-pokemon-moves.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonMoveMethodsWhereUniqueInput } from './pokemon-move-methods-where-unique.input';
import { PokemonMoveMethodsUpdateToOneWithWhereWithoutPokemonMovesInput } from './pokemon-move-methods-update-to-one-with-where-without-pokemon-moves.input';

@InputType()
export class PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput {

    @Field(() => PokemonMoveMethodsCreateWithoutPokemonMovesInput, {nullable:true})
    @Type(() => PokemonMoveMethodsCreateWithoutPokemonMovesInput)
    create?: Identity<PokemonMoveMethodsCreateWithoutPokemonMovesInput>;

    @Field(() => PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput, {nullable:true})
    @Type(() => PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput)
    connectOrCreate?: Identity<PokemonMoveMethodsCreateOrConnectWithoutPokemonMovesInput>;

    @Field(() => PokemonMoveMethodsUpsertWithoutPokemonMovesInput, {nullable:true})
    @Type(() => PokemonMoveMethodsUpsertWithoutPokemonMovesInput)
    upsert?: Identity<PokemonMoveMethodsUpsertWithoutPokemonMovesInput>;

    @Field(() => PokemonMoveMethodsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonMoveMethodsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonMoveMethodsWhereUniqueInput, 'id'>;

    @Field(() => PokemonMoveMethodsUpdateToOneWithWhereWithoutPokemonMovesInput, {nullable:true})
    @Type(() => PokemonMoveMethodsUpdateToOneWithWhereWithoutPokemonMovesInput)
    update?: Identity<PokemonMoveMethodsUpdateToOneWithWhereWithoutPokemonMovesInput>;
}
