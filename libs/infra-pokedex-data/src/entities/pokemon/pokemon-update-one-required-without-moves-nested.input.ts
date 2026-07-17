import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateWithoutMovesInput } from './pokemon-create-without-moves.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutMovesInput } from './pokemon-create-or-connect-without-moves.input';
import { PokemonUpsertWithoutMovesInput } from './pokemon-upsert-without-moves.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { PokemonUpdateToOneWithWhereWithoutMovesInput } from './pokemon-update-to-one-with-where-without-moves.input';

@InputType()
export class PokemonUpdateOneRequiredWithoutMovesNestedInput {

    @Field(() => PokemonCreateWithoutMovesInput, {nullable:true})
    @Type(() => PokemonCreateWithoutMovesInput)
    create?: Identity<PokemonCreateWithoutMovesInput>;

    @Field(() => PokemonCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Identity<PokemonCreateOrConnectWithoutMovesInput>;

    @Field(() => PokemonUpsertWithoutMovesInput, {nullable:true})
    @Type(() => PokemonUpsertWithoutMovesInput)
    upsert?: Identity<PokemonUpsertWithoutMovesInput>;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonUpdateToOneWithWhereWithoutMovesInput, {nullable:true})
    @Type(() => PokemonUpdateToOneWithWhereWithoutMovesInput)
    update?: Identity<PokemonUpdateToOneWithWhereWithoutMovesInput>;
}
