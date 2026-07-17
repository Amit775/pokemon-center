import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PokemonUpdateOneRequiredWithoutItemsNestedInput } from '../pokemon/pokemon-update-one-required-without-items-nested.input';
import { VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput } from '../versions/versions-update-one-required-without-pokemon-items-nested.input';
import { ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput } from '../items/items-update-one-required-without-pokemon-items-nested.input';

@InputType()
export class PokemonItemsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rarity?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    pokemon?: PokemonUpdateOneRequiredWithoutItemsNestedInput;

    @Field(() => VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput, {nullable:true})
    version?: VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput;

    @Field(() => ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput, {nullable:true})
    item?: ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput;
}
