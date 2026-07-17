import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from './version-group-pokemon-move-methods-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput } from './version-group-pokemon-move-methods-create-without-version-group.input';

@InputType()
export class VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput {

    @Field(() => VersionGroupPokemonMoveMethodsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>;

    @Field(() => VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput)
    create!: VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput;
}
