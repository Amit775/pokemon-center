import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsCreateInput } from './version-group-pokemon-move-methods-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVersionGroupPokemonMoveMethodsArgs {

    @Field(() => VersionGroupPokemonMoveMethodsCreateInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsCreateInput)
    data!: VersionGroupPokemonMoveMethodsCreateInput;
}
