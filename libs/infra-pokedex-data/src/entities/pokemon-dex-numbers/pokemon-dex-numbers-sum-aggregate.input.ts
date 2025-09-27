import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonDexNumbersSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    species_id?: true;

    @Field(() => Boolean, {nullable:true})
    pokedex_id?: true;

    @Field(() => Boolean, {nullable:true})
    pokedex_number?: true;
}
