import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsWhereInput } from './version-group-pokemon-move-methods-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyVersionGroupPokemonMoveMethodsArgs {

    @Field(() => VersionGroupPokemonMoveMethodsWhereInput, {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsWhereInput)
    where?: VersionGroupPokemonMoveMethodsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
