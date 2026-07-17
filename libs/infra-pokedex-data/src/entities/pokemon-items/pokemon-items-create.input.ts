import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateNestedOneWithoutItemsInput } from '../pokemon/pokemon-create-nested-one-without-items.input';
import { VersionsCreateNestedOneWithoutPokemonItemsInput } from '../versions/versions-create-nested-one-without-pokemon-items.input';
import { ItemsCreateNestedOneWithoutPokemonItemsInput } from '../items/items-create-nested-one-without-pokemon-items.input';

@InputType()
export class PokemonItemsCreateInput {

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => PokemonCreateNestedOneWithoutItemsInput, {nullable:false})
    pokemon!: Identity<PokemonCreateNestedOneWithoutItemsInput>;

    @Field(() => VersionsCreateNestedOneWithoutPokemonItemsInput, {nullable:false})
    version!: Identity<VersionsCreateNestedOneWithoutPokemonItemsInput>;

    @Field(() => ItemsCreateNestedOneWithoutPokemonItemsInput, {nullable:false})
    item!: Identity<ItemsCreateNestedOneWithoutPokemonItemsInput>;
}
