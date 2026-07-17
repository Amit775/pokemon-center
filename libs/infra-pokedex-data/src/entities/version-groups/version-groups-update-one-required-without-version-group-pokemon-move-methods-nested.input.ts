import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-create-without-version-group-pokemon-move-methods.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-create-or-connect-without-version-group-pokemon-move-methods.input';
import { VersionGroupsUpsertWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-upsert-without-version-group-pokemon-move-methods.input';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { VersionGroupsUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-update-to-one-with-where-without-version-group-pokemon-move-methods.input';

@InputType()
export class VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput {

    @Field(() => VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput)
    create?: VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput;

    @Field(() => VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput)
    connectOrCreate?: VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput;

    @Field(() => VersionGroupsUpsertWithoutVersionGroupPokemonMoveMethodsInput, {nullable:true})
    @Type(() => VersionGroupsUpsertWithoutVersionGroupPokemonMoveMethodsInput)
    upsert?: VersionGroupsUpsertWithoutVersionGroupPokemonMoveMethodsInput;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput, {nullable:true})
    @Type(() => VersionGroupsUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput)
    update?: VersionGroupsUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput;
}
