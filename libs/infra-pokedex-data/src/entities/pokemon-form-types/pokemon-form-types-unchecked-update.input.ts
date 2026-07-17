import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonFormTypesUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    pokemon_form_id?: number;

    @Field(() => Int, {nullable:true})
    type_id?: number;

    @Field(() => Int, {nullable:true})
    slot?: number;
}
