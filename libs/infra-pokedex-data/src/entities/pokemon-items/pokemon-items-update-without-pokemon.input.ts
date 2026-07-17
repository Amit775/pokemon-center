import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput } from '../versions/versions-update-one-required-without-pokemon-items-nested.input';
import { ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput } from '../items/items-update-one-required-without-pokemon-items-nested.input';

@InputType()
export class PokemonItemsUpdateWithoutPokemonInput {

    @Field(() => Int, {nullable:true})
    rarity?: number;

    @Field(() => VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput, {nullable:true})
    version?: Identity<VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput>;

    @Field(() => ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput, {nullable:true})
    item?: Identity<ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput>;
}
