import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
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
export class TypesUncheckedCreateWithoutMovesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:true})
    damage_class_id?: number;

    @Field(() => PokemonTypesUncheckedCreateNestedManyWithoutTypeInput, {nullable:true})
    pokemonTypes?: PokemonTypesUncheckedCreateNestedManyWithoutTypeInput;

    @Field(() => PokemonFormTypesUncheckedCreateNestedManyWithoutTypeInput, {nullable:true})
    formTypes?: PokemonFormTypesUncheckedCreateNestedManyWithoutTypeInput;

    @Field(() => TypeGameIndicesUncheckedCreateNestedManyWithoutTypeInput, {nullable:true})
    gameIndices?: TypeGameIndicesUncheckedCreateNestedManyWithoutTypeInput;

    @Field(() => TypeEfficacyUncheckedCreateNestedManyWithoutDamageTypeInput, {nullable:true})
    efficacy?: TypeEfficacyUncheckedCreateNestedManyWithoutDamageTypeInput;

    @Field(() => TypeEfficacyUncheckedCreateNestedManyWithoutTargetTypeInput, {nullable:true})
    efficacyTarget?: TypeEfficacyUncheckedCreateNestedManyWithoutTargetTypeInput;

    @Field(() => BerryFlavorsUncheckedCreateNestedManyWithoutTypeInput, {nullable:true})
    berryFlavors?: BerryFlavorsUncheckedCreateNestedManyWithoutTypeInput;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutKnownMoveTypeInput, {nullable:true})
    knownMoveTypes?: PokemonEvolutionUncheckedCreateNestedManyWithoutKnownMoveTypeInput;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutPartyTypeInput, {nullable:true})
    partyTypes?: PokemonEvolutionUncheckedCreateNestedManyWithoutPartyTypeInput;

    @Field(() => BerriesUncheckedCreateNestedManyWithoutNaturalGiftTypeInput, {nullable:true})
    naturalGiftTypes?: BerriesUncheckedCreateNestedManyWithoutNaturalGiftTypeInput;
}
