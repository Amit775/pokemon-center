import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMoveMethodsCreateWithoutVersionGroupsInput } from './pokemon-move-methods-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput } from './pokemon-move-methods-create-or-connect-without-version-groups.input';
import { PokemonMoveMethodsUpsertWithoutVersionGroupsInput } from './pokemon-move-methods-upsert-without-version-groups.input';
import { Prisma } from '@prisma/client';
import { PokemonMoveMethodsWhereUniqueInput } from './pokemon-move-methods-where-unique.input';
import { PokemonMoveMethodsUpdateToOneWithWhereWithoutVersionGroupsInput } from './pokemon-move-methods-update-to-one-with-where-without-version-groups.input';

@InputType()
export class PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput {

    @Field(() => PokemonMoveMethodsCreateWithoutVersionGroupsInput, {nullable:true})
    @Type(() => PokemonMoveMethodsCreateWithoutVersionGroupsInput)
    create?: PokemonMoveMethodsCreateWithoutVersionGroupsInput;

    @Field(() => PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput, {nullable:true})
    @Type(() => PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput)
    connectOrCreate?: PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput;

    @Field(() => PokemonMoveMethodsUpsertWithoutVersionGroupsInput, {nullable:true})
    @Type(() => PokemonMoveMethodsUpsertWithoutVersionGroupsInput)
    upsert?: PokemonMoveMethodsUpsertWithoutVersionGroupsInput;

    @Field(() => PokemonMoveMethodsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonMoveMethodsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonMoveMethodsWhereUniqueInput, 'id'>;

    @Field(() => PokemonMoveMethodsUpdateToOneWithWhereWithoutVersionGroupsInput, {nullable:true})
    @Type(() => PokemonMoveMethodsUpdateToOneWithWhereWithoutVersionGroupsInput)
    update?: PokemonMoveMethodsUpdateToOneWithWhereWithoutVersionGroupsInput;
}
