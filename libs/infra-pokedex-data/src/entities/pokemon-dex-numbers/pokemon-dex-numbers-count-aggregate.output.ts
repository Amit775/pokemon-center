import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonDexNumbersCountAggregate {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_number!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
