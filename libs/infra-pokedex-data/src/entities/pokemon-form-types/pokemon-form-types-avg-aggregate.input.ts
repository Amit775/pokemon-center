import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonFormTypesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    pokemon_form_id?: true;

    @Field(() => Boolean, {nullable:true})
    type_id?: true;

    @Field(() => Boolean, {nullable:true})
    slot?: true;
}
