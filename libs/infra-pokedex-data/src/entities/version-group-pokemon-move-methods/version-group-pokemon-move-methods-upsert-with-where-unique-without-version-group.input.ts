import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from './version-group-pokemon-move-methods-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput } from './version-group-pokemon-move-methods-update-without-version-group.input';
import { VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput } from './version-group-pokemon-move-methods-create-without-version-group.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutVersionGroupInput {

    @Field(() => VersionGroupPokemonMoveMethodsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>;

    @Field(() => VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput)
    update!: Identity<VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput>;

    @Field(() => VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput)
    create!: Identity<VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput>;
}
