import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonFormsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    pokemon_id?: true;

    @Field(() => Boolean, {nullable:true})
    introduced_in_version_group_id?: true;

    @Field(() => Boolean, {nullable:true})
    is_default?: true;

    @Field(() => Boolean, {nullable:true})
    is_battle_only?: true;

    @Field(() => Boolean, {nullable:true})
    is_mega?: true;

    @Field(() => Boolean, {nullable:true})
    form_order?: true;

    @Field(() => Boolean, {nullable:true})
    order?: true;
}
