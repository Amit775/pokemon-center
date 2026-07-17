import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonFormsUncheckedUpdateManyWithoutPokemonInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => String, {nullable:true})
    form_identifier?: string;

    @Field(() => Int, {nullable:true})
    introduced_in_version_group_id?: number;

    @Field(() => Int, {nullable:true})
    is_default?: number;

    @Field(() => Int, {nullable:true})
    is_battle_only?: number;

    @Field(() => Int, {nullable:true})
    is_mega?: number;

    @Field(() => Int, {nullable:true})
    form_order?: number;

    @Field(() => Int, {nullable:true})
    order?: number;
}
