import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput } from './version-group-pokemon-move-methods-create-without-version-group.input';
import { Type } from 'class-transformer';
import { VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput } from './version-group-pokemon-move-methods-create-or-connect-without-version-group.input';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope } from './version-group-pokemon-move-methods-create-many-version-group-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from './version-group-pokemon-move-methods-where-unique.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput {

    @Field(() => [VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput)
    create?: Array<VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope)
    createMany?: Identity<VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope>;

    @Field(() => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>>;
}
