import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateOneRequiredWithoutItemsNestedInput } from '../pokemon/pokemon-update-one-required-without-items-nested.input';
import { VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput } from '../versions/versions-update-one-required-without-pokemon-items-nested.input';
import { ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput } from '../items/items-update-one-required-without-pokemon-items-nested.input';

@InputType()
export class PokemonItemsUpdateInput {

    @Field(() => Int, {nullable:true})
    rarity?: number;

    @Field(() => PokemonUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    pokemon?: Identity<PokemonUpdateOneRequiredWithoutItemsNestedInput>;

    @Field(() => VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput, {nullable:true})
    version?: Identity<VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput>;

    @Field(() => ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput, {nullable:true})
    item?: Identity<ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput>;
}
