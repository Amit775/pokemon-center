import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PokemonFormTypesAvgAggregate {

    @Field(() => Float, {nullable:true})
    pokemon_form_id?: number;

    @Field(() => Float, {nullable:true})
    type_id?: number;

    @Field(() => Float, {nullable:true})
    slot?: number;
}
