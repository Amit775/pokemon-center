import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonTypesCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    pokemon_id?: true;

    @Field(() => Boolean, {nullable:true})
    type_id?: true;

    @Field(() => Boolean, {nullable:true})
    slot?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
