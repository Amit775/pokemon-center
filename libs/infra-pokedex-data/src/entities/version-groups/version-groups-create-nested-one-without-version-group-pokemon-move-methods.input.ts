import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-create-without-version-group-pokemon-move-methods.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-create-or-connect-without-version-group-pokemon-move-methods.input';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput {

    @Field(() => VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput)
    create?: VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput;

    @Field(() => VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput)
    connectOrCreate?: VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;
}
