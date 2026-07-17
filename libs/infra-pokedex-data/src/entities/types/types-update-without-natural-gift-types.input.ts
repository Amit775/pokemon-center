import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateOneRequiredWithoutTypesNestedInput } from '../generations/generations-update-one-required-without-types-nested.input';
import { MoveDamageClassesUpdateOneWithoutTypesNestedInput } from '../move-damage-classes/move-damage-classes-update-one-without-types-nested.input';
import { MovesUpdateManyWithoutTypeNestedInput } from '../moves/moves-update-many-without-type-nested.input';
import { PokemonTypesUpdateManyWithoutTypeNestedInput } from '../pokemon-types/pokemon-types-update-many-without-type-nested.input';
import { PokemonFormTypesUpdateManyWithoutTypeNestedInput } from '../pokemon-form-types/pokemon-form-types-update-many-without-type-nested.input';
import { TypeGameIndicesUpdateManyWithoutTypeNestedInput } from '../type-game-indices/type-game-indices-update-many-without-type-nested.input';
import { TypeEfficacyUpdateManyWithoutDamageTypeNestedInput } from '../type-efficacy/type-efficacy-update-many-without-damage-type-nested.input';
import { TypeEfficacyUpdateManyWithoutTargetTypeNestedInput } from '../type-efficacy/type-efficacy-update-many-without-target-type-nested.input';
import { BerryFlavorsUpdateManyWithoutTypeNestedInput } from '../berry-flavors/berry-flavors-update-many-without-type-nested.input';
import { PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-known-move-type-nested.input';
import { PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-party-type-nested.input';

@InputType()
export class TypesUpdateWithoutNaturalGiftTypesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => GenerationsUpdateOneRequiredWithoutTypesNestedInput, {nullable:true})
    generation?: Identity<GenerationsUpdateOneRequiredWithoutTypesNestedInput>;

    @Field(() => MoveDamageClassesUpdateOneWithoutTypesNestedInput, {nullable:true})
    damageClass?: Identity<MoveDamageClassesUpdateOneWithoutTypesNestedInput>;

    @Field(() => MovesUpdateManyWithoutTypeNestedInput, {nullable:true})
    moves?: Identity<MovesUpdateManyWithoutTypeNestedInput>;

    @Field(() => PokemonTypesUpdateManyWithoutTypeNestedInput, {nullable:true})
    pokemonTypes?: Identity<PokemonTypesUpdateManyWithoutTypeNestedInput>;

    @Field(() => PokemonFormTypesUpdateManyWithoutTypeNestedInput, {nullable:true})
    formTypes?: Identity<PokemonFormTypesUpdateManyWithoutTypeNestedInput>;

    @Field(() => TypeGameIndicesUpdateManyWithoutTypeNestedInput, {nullable:true})
    gameIndices?: Identity<TypeGameIndicesUpdateManyWithoutTypeNestedInput>;

    @Field(() => TypeEfficacyUpdateManyWithoutDamageTypeNestedInput, {nullable:true})
    efficacy?: Identity<TypeEfficacyUpdateManyWithoutDamageTypeNestedInput>;

    @Field(() => TypeEfficacyUpdateManyWithoutTargetTypeNestedInput, {nullable:true})
    efficacyTarget?: Identity<TypeEfficacyUpdateManyWithoutTargetTypeNestedInput>;

    @Field(() => BerryFlavorsUpdateManyWithoutTypeNestedInput, {nullable:true})
    berryFlavors?: Identity<BerryFlavorsUpdateManyWithoutTypeNestedInput>;

    @Field(() => PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput, {nullable:true})
    knownMoveTypes?: Identity<PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput>;

    @Field(() => PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput, {nullable:true})
    partyTypes?: Identity<PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput>;
}
