import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsCreateInput } from './version-group-pokemon-move-methods-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVersionGroupPokemonMoveMethodsArgs {

    @Field(() => VersionGroupPokemonMoveMethodsCreateInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsCreateInput)
    data!: Identity<VersionGroupPokemonMoveMethodsCreateInput>;
}
