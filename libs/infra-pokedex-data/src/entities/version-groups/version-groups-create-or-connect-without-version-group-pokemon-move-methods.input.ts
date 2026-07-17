import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-create-without-version-group-pokemon-move-methods.input';

@InputType()
export class VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput {

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput)
    create!: VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput;
}
