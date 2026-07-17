import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsUncheckedUpdateManyInput } from './version-group-pokemon-move-methods-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { VersionGroupPokemonMoveMethodsWhereInput } from './version-group-pokemon-move-methods-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyVersionGroupPokemonMoveMethodsArgs {

    @Field(() => VersionGroupPokemonMoveMethodsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsUncheckedUpdateManyInput)
    data!: Identity<VersionGroupPokemonMoveMethodsUncheckedUpdateManyInput>;

    @Field(() => VersionGroupPokemonMoveMethodsWhereInput, {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsWhereInput)
    where?: Identity<VersionGroupPokemonMoveMethodsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
