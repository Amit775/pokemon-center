import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonAbilitiesMaxAggregate {

    @Field(() => Int, {nullable:true})
    pokemon_id?: number;

    @Field(() => Int, {nullable:true})
    ability_id?: number;

    @Field(() => Int, {nullable:true})
    is_hidden?: number;

    @Field(() => Int, {nullable:true})
    slot?: number;
}
