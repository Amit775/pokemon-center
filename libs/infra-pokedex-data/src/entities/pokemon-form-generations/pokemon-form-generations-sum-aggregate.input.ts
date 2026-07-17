import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonFormGenerationsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    pokemon_form_id?: true;

    @Field(() => Boolean, {nullable:true})
    generation_id?: true;

    @Field(() => Boolean, {nullable:true})
    game_index?: true;
}
