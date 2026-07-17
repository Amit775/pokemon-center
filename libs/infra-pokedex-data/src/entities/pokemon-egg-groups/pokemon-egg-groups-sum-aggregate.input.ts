import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonEggGroupsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    species_id?: true;

    @Field(() => Boolean, {nullable:true})
    egg_group_id?: true;
}
