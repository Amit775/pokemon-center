import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { MovesUncheckedUpdateManyWithoutTypeNestedInput } from '../moves/moves-unchecked-update-many-without-type-nested.input';
import { PokemonTypesUncheckedUpdateManyWithoutTypeNestedInput } from '../pokemon-types/pokemon-types-unchecked-update-many-without-type-nested.input';
import { PokemonFormTypesUncheckedUpdateManyWithoutTypeNestedInput } from '../pokemon-form-types/pokemon-form-types-unchecked-update-many-without-type-nested.input';
import { TypeGameIndicesUncheckedUpdateManyWithoutTypeNestedInput } from '../type-game-indices/type-game-indices-unchecked-update-many-without-type-nested.input';
import { TypeEfficacyUncheckedUpdateManyWithoutDamageTypeNestedInput } from '../type-efficacy/type-efficacy-unchecked-update-many-without-damage-type-nested.input';
import { BerryFlavorsUncheckedUpdateManyWithoutTypeNestedInput } from '../berry-flavors/berry-flavors-unchecked-update-many-without-type-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveTypeNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-known-move-type-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutPartyTypeNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-party-type-nested.input';
import { BerriesUncheckedUpdateManyWithoutNaturalGiftTypeNestedInput } from '../berries/berries-unchecked-update-many-without-natural-gift-type-nested.input';

@InputType()
export class TypesUncheckedUpdateWithoutEfficacyTargetInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    generation_id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    damage_class_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => MovesUncheckedUpdateManyWithoutTypeNestedInput, {nullable:true})
    moves?: MovesUncheckedUpdateManyWithoutTypeNestedInput;

    @Field(() => PokemonTypesUncheckedUpdateManyWithoutTypeNestedInput, {nullable:true})
    pokemonTypes?: PokemonTypesUncheckedUpdateManyWithoutTypeNestedInput;

    @Field(() => PokemonFormTypesUncheckedUpdateManyWithoutTypeNestedInput, {nullable:true})
    formTypes?: PokemonFormTypesUncheckedUpdateManyWithoutTypeNestedInput;

    @Field(() => TypeGameIndicesUncheckedUpdateManyWithoutTypeNestedInput, {nullable:true})
    gameIndices?: TypeGameIndicesUncheckedUpdateManyWithoutTypeNestedInput;

    @Field(() => TypeEfficacyUncheckedUpdateManyWithoutDamageTypeNestedInput, {nullable:true})
    efficacy?: TypeEfficacyUncheckedUpdateManyWithoutDamageTypeNestedInput;

    @Field(() => BerryFlavorsUncheckedUpdateManyWithoutTypeNestedInput, {nullable:true})
    berryFlavors?: BerryFlavorsUncheckedUpdateManyWithoutTypeNestedInput;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveTypeNestedInput, {nullable:true})
    knownMoveTypes?: PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveTypeNestedInput;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutPartyTypeNestedInput, {nullable:true})
    partyTypes?: PokemonEvolutionUncheckedUpdateManyWithoutPartyTypeNestedInput;

    @Field(() => BerriesUncheckedUpdateManyWithoutNaturalGiftTypeNestedInput, {nullable:true})
    naturalGiftTypes?: BerriesUncheckedUpdateManyWithoutNaturalGiftTypeNestedInput;
}
