import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    identifier?: true;

    @Field(() => Boolean, {nullable:true})
    species_id?: true;

    @Field(() => Boolean, {nullable:true})
    height?: true;

    @Field(() => Boolean, {nullable:true})
    weight?: true;

    @Field(() => Boolean, {nullable:true})
    base_experience?: true;

    @Field(() => Boolean, {nullable:true})
    order?: true;

    @Field(() => Boolean, {nullable:true})
    is_default?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
