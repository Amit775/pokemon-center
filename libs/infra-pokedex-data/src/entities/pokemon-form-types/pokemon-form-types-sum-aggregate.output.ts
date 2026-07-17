import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonFormTypesSumAggregate {

    @Field(() => Int, {nullable:true})
    pokemon_form_id?: number;

    @Field(() => Int, {nullable:true})
    type_id?: number;

    @Field(() => Int, {nullable:true})
    slot?: number;
}
