import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsUpdateInput } from './version-group-pokemon-move-methods-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from './version-group-pokemon-move-methods-where-unique.input';

@ArgsType()
export class UpdateOneVersionGroupPokemonMoveMethodsArgs {

    @Field(() => VersionGroupPokemonMoveMethodsUpdateInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsUpdateInput)
    data!: Identity<VersionGroupPokemonMoveMethodsUpdateInput>;

    @Field(() => VersionGroupPokemonMoveMethodsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>;
}
