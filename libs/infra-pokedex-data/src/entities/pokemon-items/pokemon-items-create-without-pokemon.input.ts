import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionsCreateNestedOneWithoutPokemonItemsInput } from '../versions/versions-create-nested-one-without-pokemon-items.input';
import { ItemsCreateNestedOneWithoutPokemonItemsInput } from '../items/items-create-nested-one-without-pokemon-items.input';

@InputType()
export class PokemonItemsCreateWithoutPokemonInput {

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => VersionsCreateNestedOneWithoutPokemonItemsInput, {nullable:false})
    version!: VersionsCreateNestedOneWithoutPokemonItemsInput;

    @Field(() => ItemsCreateNestedOneWithoutPokemonItemsInput, {nullable:false})
    item!: ItemsCreateNestedOneWithoutPokemonItemsInput;
}
