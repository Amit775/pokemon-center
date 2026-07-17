import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-create-without-version-group-pokemon-move-methods.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-create-or-connect-without-version-group-pokemon-move-methods.input';
import { VersionGroupsUpsertWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-upsert-without-version-group-pokemon-move-methods.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { VersionGroupsUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-update-to-one-with-where-without-version-group-pokemon-move-methods.input';

@InputType()
export class VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput {

    @Field(() => VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput)
    create?: Identity<VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput>;

    @Field(() => VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput)
    connectOrCreate?: Identity<VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput>;

    @Field(() => VersionGroupsUpsertWithoutVersionGroupPokemonMoveMethodsInput, {nullable:true})
    @Type(() => VersionGroupsUpsertWithoutVersionGroupPokemonMoveMethodsInput)
    upsert?: Identity<VersionGroupsUpsertWithoutVersionGroupPokemonMoveMethodsInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput, {nullable:true})
    @Type(() => VersionGroupsUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput)
    update?: Identity<VersionGroupsUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput>;
}
