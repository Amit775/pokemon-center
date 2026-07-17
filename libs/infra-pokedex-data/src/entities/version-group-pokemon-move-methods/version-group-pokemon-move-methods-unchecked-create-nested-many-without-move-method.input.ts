import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput } from './version-group-pokemon-move-methods-create-without-move-method.input';
import { Type } from 'class-transformer';
import { VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput } from './version-group-pokemon-move-methods-create-or-connect-without-move-method.input';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope } from './version-group-pokemon-move-methods-create-many-move-method-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from './version-group-pokemon-move-methods-where-unique.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutMoveMethodInput {

    @Field(() => [VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput)
    create?: Array<VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput)
    connectOrCreate?: Array<VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput>;

    @Field(() => VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope, {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope)
    createMany?: Identity<VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope>;

    @Field(() => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>>;
}
