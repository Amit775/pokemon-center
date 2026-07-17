import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonDexNumbersUpdateManyWithoutPokedexNestedInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-update-many-without-pokedex-nested.input';
import { PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput } from '../pokedex-version-groups/pokedex-version-groups-update-many-without-pokedex-nested.input';

@InputType()
export class PokedexesUpdateWithoutRegionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_main_series?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonDexNumbersUpdateManyWithoutPokedexNestedInput, {nullable:true})
    dexNumbers?: PokemonDexNumbersUpdateManyWithoutPokedexNestedInput;

    @Field(() => PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput, {nullable:true})
    versionGroups?: PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput;
}
