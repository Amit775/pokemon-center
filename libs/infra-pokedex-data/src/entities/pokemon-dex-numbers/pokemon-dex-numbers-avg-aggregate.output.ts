import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PokemonDexNumbersAvgAggregate {

    @Field(() => Float, {nullable:true})
    species_id?: number;

    @Field(() => Float, {nullable:true})
    pokedex_id?: number;

    @Field(() => Float, {nullable:true})
    pokedex_number?: number;
}
