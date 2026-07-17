import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesCreateNestedOneWithoutVersionGroupsInput } from '../pokedexes/pokedexes-create-nested-one-without-version-groups.input';

@InputType()
export class PokedexVersionGroupsCreateWithoutVersionGroupInput {

    @Field(() => PokedexesCreateNestedOneWithoutVersionGroupsInput, {nullable:false})
    pokedex!: Identity<PokedexesCreateNestedOneWithoutVersionGroupsInput>;
}
