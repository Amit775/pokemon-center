import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from './version-group-pokemon-move-methods-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput } from './version-group-pokemon-move-methods-update-without-move-method.input';
import { VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput } from './version-group-pokemon-move-methods-create-without-move-method.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutMoveMethodInput {

    @Field(() => VersionGroupPokemonMoveMethodsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>;

    @Field(() => VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput)
    update!: VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput;

    @Field(() => VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput)
    create!: VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput;
}
