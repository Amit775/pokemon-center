import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMoveMethodsCreateWithoutVersionGroupsInput } from './pokemon-move-methods-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput } from './pokemon-move-methods-create-or-connect-without-version-groups.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonMoveMethodsWhereUniqueInput } from './pokemon-move-methods-where-unique.input';

@InputType()
export class PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput {

    @Field(() => PokemonMoveMethodsCreateWithoutVersionGroupsInput, {nullable:true})
    @Type(() => PokemonMoveMethodsCreateWithoutVersionGroupsInput)
    create?: Identity<PokemonMoveMethodsCreateWithoutVersionGroupsInput>;

    @Field(() => PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput, {nullable:true})
    @Type(() => PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput)
    connectOrCreate?: Identity<PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput>;

    @Field(() => PokemonMoveMethodsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonMoveMethodsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonMoveMethodsWhereUniqueInput, 'id'>;
}
