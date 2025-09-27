import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PokemonAbilitiesAvgAggregate {

    @Field(() => Float, {nullable:true})
    pokemon_id?: number;

    @Field(() => Float, {nullable:true})
    ability_id?: number;

    @Field(() => Float, {nullable:true})
    is_hidden?: number;

    @Field(() => Float, {nullable:true})
    slot?: number;
}
