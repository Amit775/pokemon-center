import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonAbilitiesUncheckedUpdateWithoutAbilityInput {

    @Field(() => Int, {nullable:true})
    pokemon_id?: number;

    @Field(() => Int, {nullable:true})
    is_hidden?: number;

    @Field(() => Int, {nullable:true})
    slot?: number;
}
