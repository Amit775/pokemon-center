import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonItemsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    pokemon_id?: true;

    @Field(() => Boolean, {nullable:true})
    version_id?: true;

    @Field(() => Boolean, {nullable:true})
    item_id?: true;

    @Field(() => Boolean, {nullable:true})
    rarity?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
