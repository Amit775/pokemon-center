import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from './version-group-pokemon-move-methods-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput } from './version-group-pokemon-move-methods-create-without-version-group.input';

@InputType()
export class VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput {

    @Field(() => VersionGroupPokemonMoveMethodsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>;

    @Field(() => VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput)
    create!: Identity<VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput>;
}
