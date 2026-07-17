import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonCreateNestedOneWithoutItemsInput } from '../pokemon/pokemon-create-nested-one-without-items.input';
import { ItemsCreateNestedOneWithoutPokemonItemsInput } from '../items/items-create-nested-one-without-pokemon-items.input';

@InputType()
export class PokemonItemsCreateWithoutVersionInput {

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => PokemonCreateNestedOneWithoutItemsInput, {nullable:false})
    pokemon!: PokemonCreateNestedOneWithoutItemsInput;

    @Field(() => ItemsCreateNestedOneWithoutPokemonItemsInput, {nullable:false})
    item!: ItemsCreateNestedOneWithoutPokemonItemsInput;
}
