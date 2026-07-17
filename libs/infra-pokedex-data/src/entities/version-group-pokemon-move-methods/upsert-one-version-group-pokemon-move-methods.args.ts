import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from './version-group-pokemon-move-methods-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupPokemonMoveMethodsCreateInput } from './version-group-pokemon-move-methods-create.input';
import { VersionGroupPokemonMoveMethodsUpdateInput } from './version-group-pokemon-move-methods-update.input';

@ArgsType()
export class UpsertOneVersionGroupPokemonMoveMethodsArgs {

    @Field(() => VersionGroupPokemonMoveMethodsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>;

    @Field(() => VersionGroupPokemonMoveMethodsCreateInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsCreateInput)
    create!: VersionGroupPokemonMoveMethodsCreateInput;

    @Field(() => VersionGroupPokemonMoveMethodsUpdateInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsUpdateInput)
    update!: VersionGroupPokemonMoveMethodsUpdateInput;
}
