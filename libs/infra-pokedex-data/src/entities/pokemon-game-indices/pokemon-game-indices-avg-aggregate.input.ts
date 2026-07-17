import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonGameIndicesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    pokemon_id?: true;

    @Field(() => Boolean, {nullable:true})
    version_id?: true;

    @Field(() => Boolean, {nullable:true})
    game_index?: true;
}
