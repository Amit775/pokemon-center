import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUncheckedUpdateManyWithoutTypeNestedInput } from '../moves/moves-unchecked-update-many-without-type-nested.input';
import { PokemonTypesUncheckedUpdateManyWithoutTypeNestedInput } from '../pokemon-types/pokemon-types-unchecked-update-many-without-type-nested.input';
import { TypeGameIndicesUncheckedUpdateManyWithoutTypeNestedInput } from '../type-game-indices/type-game-indices-unchecked-update-many-without-type-nested.input';
import { TypeEfficacyUncheckedUpdateManyWithoutDamageTypeNestedInput } from '../type-efficacy/type-efficacy-unchecked-update-many-without-damage-type-nested.input';
import { TypeEfficacyUncheckedUpdateManyWithoutTargetTypeNestedInput } from '../type-efficacy/type-efficacy-unchecked-update-many-without-target-type-nested.input';
import { BerryFlavorsUncheckedUpdateManyWithoutTypeNestedInput } from '../berry-flavors/berry-flavors-unchecked-update-many-without-type-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveTypeNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-known-move-type-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutPartyTypeNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-party-type-nested.input';
import { BerriesUncheckedUpdateManyWithoutNaturalGiftTypeNestedInput } from '../berries/berries-unchecked-update-many-without-natural-gift-type-nested.input';

@InputType()
export class TypesUncheckedUpdateWithoutFormTypesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    generation_id?: number;

    @Field(() => Int, {nullable:true})
    damage_class_id?: number;

    @Field(() => MovesUncheckedUpdateManyWithoutTypeNestedInput, {nullable:true})
    moves?: Identity<MovesUncheckedUpdateManyWithoutTypeNestedInput>;

    @Field(() => PokemonTypesUncheckedUpdateManyWithoutTypeNestedInput, {nullable:true})
    pokemonTypes?: Identity<PokemonTypesUncheckedUpdateManyWithoutTypeNestedInput>;

    @Field(() => TypeGameIndicesUncheckedUpdateManyWithoutTypeNestedInput, {nullable:true})
    gameIndices?: Identity<TypeGameIndicesUncheckedUpdateManyWithoutTypeNestedInput>;

    @Field(() => TypeEfficacyUncheckedUpdateManyWithoutDamageTypeNestedInput, {nullable:true})
    efficacy?: Identity<TypeEfficacyUncheckedUpdateManyWithoutDamageTypeNestedInput>;

    @Field(() => TypeEfficacyUncheckedUpdateManyWithoutTargetTypeNestedInput, {nullable:true})
    efficacyTarget?: Identity<TypeEfficacyUncheckedUpdateManyWithoutTargetTypeNestedInput>;

    @Field(() => BerryFlavorsUncheckedUpdateManyWithoutTypeNestedInput, {nullable:true})
    berryFlavors?: Identity<BerryFlavorsUncheckedUpdateManyWithoutTypeNestedInput>;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveTypeNestedInput, {nullable:true})
    knownMoveTypes?: Identity<PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveTypeNestedInput>;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutPartyTypeNestedInput, {nullable:true})
    partyTypes?: Identity<PokemonEvolutionUncheckedUpdateManyWithoutPartyTypeNestedInput>;

    @Field(() => BerriesUncheckedUpdateManyWithoutNaturalGiftTypeNestedInput, {nullable:true})
    naturalGiftTypes?: Identity<BerriesUncheckedUpdateManyWithoutNaturalGiftTypeNestedInput>;
}
