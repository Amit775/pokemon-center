import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsCreateNestedManyWithoutMoveMethodInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-create-nested-many-without-move-method.input';

@InputType()
export class PokemonMoveMethodsCreateWithoutPokemonMovesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => VersionGroupPokemonMoveMethodsCreateNestedManyWithoutMoveMethodInput, {nullable:true})
    versionGroups?: VersionGroupPokemonMoveMethodsCreateNestedManyWithoutMoveMethodInput;
}
