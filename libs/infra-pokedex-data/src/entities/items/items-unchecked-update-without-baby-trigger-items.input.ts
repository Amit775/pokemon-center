import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { PokemonItemsUncheckedUpdateManyWithoutItemNestedInput } from '../pokemon-items/pokemon-items-unchecked-update-many-without-item-nested.input';
import { MachinesUncheckedUpdateManyWithoutItemNestedInput } from '../machines/machines-unchecked-update-many-without-item-nested.input';
import { BerriesUncheckedUpdateManyWithoutItemNestedInput } from '../berries/berries-unchecked-update-many-without-item-nested.input';
import { ItemGameIndicesUncheckedUpdateManyWithoutItemNestedInput } from '../item-game-indices/item-game-indices-unchecked-update-many-without-item-nested.input';
import { ItemFlagMapUncheckedUpdateManyWithoutItemNestedInput } from '../item-flag-map/item-flag-map-unchecked-update-many-without-item-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutTriggerItemNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-trigger-item-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutHeldItemNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-held-item-nested.input';

@InputType()
export class ItemsUncheckedUpdateWithoutBabyTriggerItemsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    category_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cost?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    fling_power?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    fling_effect_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => PokemonItemsUncheckedUpdateManyWithoutItemNestedInput, {nullable:true})
    pokemonItems?: PokemonItemsUncheckedUpdateManyWithoutItemNestedInput;

    @Field(() => MachinesUncheckedUpdateManyWithoutItemNestedInput, {nullable:true})
    machines?: MachinesUncheckedUpdateManyWithoutItemNestedInput;

    @Field(() => BerriesUncheckedUpdateManyWithoutItemNestedInput, {nullable:true})
    berries?: BerriesUncheckedUpdateManyWithoutItemNestedInput;

    @Field(() => ItemGameIndicesUncheckedUpdateManyWithoutItemNestedInput, {nullable:true})
    gameIndices?: ItemGameIndicesUncheckedUpdateManyWithoutItemNestedInput;

    @Field(() => ItemFlagMapUncheckedUpdateManyWithoutItemNestedInput, {nullable:true})
    flagMap?: ItemFlagMapUncheckedUpdateManyWithoutItemNestedInput;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutTriggerItemNestedInput, {nullable:true})
    triggerItems?: PokemonEvolutionUncheckedUpdateManyWithoutTriggerItemNestedInput;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutHeldItemNestedInput, {nullable:true})
    heldItems?: PokemonEvolutionUncheckedUpdateManyWithoutHeldItemNestedInput;
}
