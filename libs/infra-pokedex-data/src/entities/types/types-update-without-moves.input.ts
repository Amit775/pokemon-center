import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GenerationsUpdateOneRequiredWithoutTypesNestedInput } from '../generations/generations-update-one-required-without-types-nested.input';
import { MoveDamageClassesUpdateOneWithoutTypesNestedInput } from '../move-damage-classes/move-damage-classes-update-one-without-types-nested.input';
import { PokemonTypesUpdateManyWithoutTypeNestedInput } from '../pokemon-types/pokemon-types-update-many-without-type-nested.input';
import { PokemonFormTypesUpdateManyWithoutTypeNestedInput } from '../pokemon-form-types/pokemon-form-types-update-many-without-type-nested.input';
import { TypeGameIndicesUpdateManyWithoutTypeNestedInput } from '../type-game-indices/type-game-indices-update-many-without-type-nested.input';
import { TypeEfficacyUpdateManyWithoutDamageTypeNestedInput } from '../type-efficacy/type-efficacy-update-many-without-damage-type-nested.input';
import { TypeEfficacyUpdateManyWithoutTargetTypeNestedInput } from '../type-efficacy/type-efficacy-update-many-without-target-type-nested.input';
import { BerryFlavorsUpdateManyWithoutTypeNestedInput } from '../berry-flavors/berry-flavors-update-many-without-type-nested.input';
import { PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-known-move-type-nested.input';
import { PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-party-type-nested.input';
import { BerriesUpdateManyWithoutNaturalGiftTypeNestedInput } from '../berries/berries-update-many-without-natural-gift-type-nested.input';

@InputType()
export class TypesUpdateWithoutMovesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => GenerationsUpdateOneRequiredWithoutTypesNestedInput, {nullable:true})
    generation?: GenerationsUpdateOneRequiredWithoutTypesNestedInput;

    @Field(() => MoveDamageClassesUpdateOneWithoutTypesNestedInput, {nullable:true})
    damageClass?: MoveDamageClassesUpdateOneWithoutTypesNestedInput;

    @Field(() => PokemonTypesUpdateManyWithoutTypeNestedInput, {nullable:true})
    pokemonTypes?: PokemonTypesUpdateManyWithoutTypeNestedInput;

    @Field(() => PokemonFormTypesUpdateManyWithoutTypeNestedInput, {nullable:true})
    formTypes?: PokemonFormTypesUpdateManyWithoutTypeNestedInput;

    @Field(() => TypeGameIndicesUpdateManyWithoutTypeNestedInput, {nullable:true})
    gameIndices?: TypeGameIndicesUpdateManyWithoutTypeNestedInput;

    @Field(() => TypeEfficacyUpdateManyWithoutDamageTypeNestedInput, {nullable:true})
    efficacy?: TypeEfficacyUpdateManyWithoutDamageTypeNestedInput;

    @Field(() => TypeEfficacyUpdateManyWithoutTargetTypeNestedInput, {nullable:true})
    efficacyTarget?: TypeEfficacyUpdateManyWithoutTargetTypeNestedInput;

    @Field(() => BerryFlavorsUpdateManyWithoutTypeNestedInput, {nullable:true})
    berryFlavors?: BerryFlavorsUpdateManyWithoutTypeNestedInput;

    @Field(() => PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput, {nullable:true})
    knownMoveTypes?: PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput;

    @Field(() => PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput, {nullable:true})
    partyTypes?: PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput;

    @Field(() => BerriesUpdateManyWithoutNaturalGiftTypeNestedInput, {nullable:true})
    naturalGiftTypes?: BerriesUpdateManyWithoutNaturalGiftTypeNestedInput;
}
