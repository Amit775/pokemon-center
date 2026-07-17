import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonAbilitiesSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    pokemon_id?: true;

    @Field(() => Boolean, {nullable:true})
    ability_id?: true;

    @Field(() => Boolean, {nullable:true})
    is_hidden?: true;

    @Field(() => Boolean, {nullable:true})
    slot?: true;
}
