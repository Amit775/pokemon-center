import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonStatsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    pokemon_id?: true;

    @Field(() => Boolean, {nullable:true})
    stat_id?: true;

    @Field(() => Boolean, {nullable:true})
    base_stat?: true;

    @Field(() => Boolean, {nullable:true})
    effort?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
