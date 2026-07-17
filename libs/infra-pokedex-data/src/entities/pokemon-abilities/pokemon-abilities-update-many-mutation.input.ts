import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonAbilitiesUpdateManyMutationInput {

    @Field(() => Int, {nullable:true})
    is_hidden?: number;

    @Field(() => Int, {nullable:true})
    slot?: number;
}
