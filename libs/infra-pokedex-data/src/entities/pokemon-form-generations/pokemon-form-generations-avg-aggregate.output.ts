import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PokemonFormGenerationsAvgAggregate {

    @Field(() => Float, {nullable:true})
    pokemon_form_id?: number;

    @Field(() => Float, {nullable:true})
    generation_id?: number;

    @Field(() => Float, {nullable:true})
    game_index?: number;
}
