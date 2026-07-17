import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput } from '../pokemon-move-methods/pokemon-move-methods-create-nested-one-without-version-groups.input';

@InputType()
export class VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput {

    @Field(() => PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput, {nullable:false})
    moveMethod!: Identity<PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput>;
}
