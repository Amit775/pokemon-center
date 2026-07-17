import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonDexNumbersUncheckedUpdateManyWithoutPokedexNestedInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-unchecked-update-many-without-pokedex-nested.input';
import { PokedexVersionGroupsUncheckedUpdateManyWithoutPokedexNestedInput } from '../pokedex-version-groups/pokedex-version-groups-unchecked-update-many-without-pokedex-nested.input';

@InputType()
export class PokedexesUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    region_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_main_series?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonDexNumbersUncheckedUpdateManyWithoutPokedexNestedInput, {nullable:true})
    dexNumbers?: PokemonDexNumbersUncheckedUpdateManyWithoutPokedexNestedInput;

    @Field(() => PokedexVersionGroupsUncheckedUpdateManyWithoutPokedexNestedInput, {nullable:true})
    versionGroups?: PokedexVersionGroupsUncheckedUpdateManyWithoutPokedexNestedInput;
}
