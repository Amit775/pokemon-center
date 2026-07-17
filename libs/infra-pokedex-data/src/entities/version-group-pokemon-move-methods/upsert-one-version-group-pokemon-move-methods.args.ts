import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from './version-group-pokemon-move-methods-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsCreateInput } from './version-group-pokemon-move-methods-create.input';
import { VersionGroupPokemonMoveMethodsUpdateInput } from './version-group-pokemon-move-methods-update.input';

@ArgsType()
export class UpsertOneVersionGroupPokemonMoveMethodsArgs {

    @Field(() => VersionGroupPokemonMoveMethodsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>;

    @Field(() => VersionGroupPokemonMoveMethodsCreateInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsCreateInput)
    create!: Identity<VersionGroupPokemonMoveMethodsCreateInput>;

    @Field(() => VersionGroupPokemonMoveMethodsUpdateInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsUpdateInput)
    update!: Identity<VersionGroupPokemonMoveMethodsUpdateInput>;
}
