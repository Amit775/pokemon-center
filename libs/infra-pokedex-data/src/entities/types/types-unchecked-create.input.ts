import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUncheckedCreateNestedManyWithoutTypeInput } from '../moves/moves-unchecked-create-nested-many-without-type.input';
import { PokemonTypesUncheckedCreateNestedManyWithoutTypeInput } from '../pokemon-types/pokemon-types-unchecked-create-nested-many-without-type.input';
import { PokemonFormTypesUncheckedCreateNestedManyWithoutTypeInput } from '../pokemon-form-types/pokemon-form-types-unchecked-create-nested-many-without-type.input';
import { TypeGameIndicesUncheckedCreateNestedManyWithoutTypeInput } from '../type-game-indices/type-game-indices-unchecked-create-nested-many-without-type.input';
import { TypeEfficacyUncheckedCreateNestedManyWithoutDamageTypeInput } from '../type-efficacy/type-efficacy-unchecked-create-nested-many-without-damage-type.input';
import { TypeEfficacyUncheckedCreateNestedManyWithoutTargetTypeInput } from '../type-efficacy/type-efficacy-unchecked-create-nested-many-without-target-type.input';
import { BerryFlavorsUncheckedCreateNestedManyWithoutTypeInput } from '../berry-flavors/berry-flavors-unchecked-create-nested-many-without-type.input';
import { PokemonEvolutionUncheckedCreateNestedManyWithoutKnownMoveTypeInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-known-move-type.input';
import { PokemonEvolutionUncheckedCreateNestedManyWithoutPartyTypeInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-party-type.input';
import { BerriesUncheckedCreateNestedManyWithoutNaturalGiftTypeInput } from '../berries/berries-unchecked-create-nested-many-without-natural-gift-type.input';

@InputType()
export class TypesUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:true})
    damage_class_id?: number;

    @Field(() => MovesUncheckedCreateNestedManyWithoutTypeInput, {nullable:true})
    moves?: Identity<MovesUncheckedCreateNestedManyWithoutTypeInput>;

    @Field(() => PokemonTypesUncheckedCreateNestedManyWithoutTypeInput, {nullable:true})
    pokemonTypes?: Identity<PokemonTypesUncheckedCreateNestedManyWithoutTypeInput>;

    @Field(() => PokemonFormTypesUncheckedCreateNestedManyWithoutTypeInput, {nullable:true})
    formTypes?: Identity<PokemonFormTypesUncheckedCreateNestedManyWithoutTypeInput>;

    @Field(() => TypeGameIndicesUncheckedCreateNestedManyWithoutTypeInput, {nullable:true})
    gameIndices?: Identity<TypeGameIndicesUncheckedCreateNestedManyWithoutTypeInput>;

    @Field(() => TypeEfficacyUncheckedCreateNestedManyWithoutDamageTypeInput, {nullable:true})
    efficacy?: Identity<TypeEfficacyUncheckedCreateNestedManyWithoutDamageTypeInput>;

    @Field(() => TypeEfficacyUncheckedCreateNestedManyWithoutTargetTypeInput, {nullable:true})
    efficacyTarget?: Identity<TypeEfficacyUncheckedCreateNestedManyWithoutTargetTypeInput>;

    @Field(() => BerryFlavorsUncheckedCreateNestedManyWithoutTypeInput, {nullable:true})
    berryFlavors?: Identity<BerryFlavorsUncheckedCreateNestedManyWithoutTypeInput>;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutKnownMoveTypeInput, {nullable:true})
    knownMoveTypes?: Identity<PokemonEvolutionUncheckedCreateNestedManyWithoutKnownMoveTypeInput>;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutPartyTypeInput, {nullable:true})
    partyTypes?: Identity<PokemonEvolutionUncheckedCreateNestedManyWithoutPartyTypeInput>;

    @Field(() => BerriesUncheckedCreateNestedManyWithoutNaturalGiftTypeInput, {nullable:true})
    naturalGiftTypes?: Identity<BerriesUncheckedCreateNestedManyWithoutNaturalGiftTypeInput>;
}
