import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenerationsCreateNestedOneWithoutTypesInput } from '../generations/generations-create-nested-one-without-types.input';
import { MoveDamageClassesCreateNestedOneWithoutTypesInput } from '../move-damage-classes/move-damage-classes-create-nested-one-without-types.input';
import { MovesCreateNestedManyWithoutTypeInput } from '../moves/moves-create-nested-many-without-type.input';
import { PokemonTypesCreateNestedManyWithoutTypeInput } from '../pokemon-types/pokemon-types-create-nested-many-without-type.input';
import { PokemonFormTypesCreateNestedManyWithoutTypeInput } from '../pokemon-form-types/pokemon-form-types-create-nested-many-without-type.input';
import { TypeGameIndicesCreateNestedManyWithoutTypeInput } from '../type-game-indices/type-game-indices-create-nested-many-without-type.input';
import { TypeEfficacyCreateNestedManyWithoutDamageTypeInput } from '../type-efficacy/type-efficacy-create-nested-many-without-damage-type.input';
import { TypeEfficacyCreateNestedManyWithoutTargetTypeInput } from '../type-efficacy/type-efficacy-create-nested-many-without-target-type.input';
import { BerryFlavorsCreateNestedManyWithoutTypeInput } from '../berry-flavors/berry-flavors-create-nested-many-without-type.input';
import { PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-known-move-type.input';
import { PokemonEvolutionCreateNestedManyWithoutPartyTypeInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-party-type.input';

@InputType()
export class TypesCreateWithoutNaturalGiftTypesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => GenerationsCreateNestedOneWithoutTypesInput, {nullable:false})
    generation!: GenerationsCreateNestedOneWithoutTypesInput;

    @Field(() => MoveDamageClassesCreateNestedOneWithoutTypesInput, {nullable:true})
    damageClass?: MoveDamageClassesCreateNestedOneWithoutTypesInput;

    @Field(() => MovesCreateNestedManyWithoutTypeInput, {nullable:true})
    moves?: MovesCreateNestedManyWithoutTypeInput;

    @Field(() => PokemonTypesCreateNestedManyWithoutTypeInput, {nullable:true})
    pokemonTypes?: PokemonTypesCreateNestedManyWithoutTypeInput;

    @Field(() => PokemonFormTypesCreateNestedManyWithoutTypeInput, {nullable:true})
    formTypes?: PokemonFormTypesCreateNestedManyWithoutTypeInput;

    @Field(() => TypeGameIndicesCreateNestedManyWithoutTypeInput, {nullable:true})
    gameIndices?: TypeGameIndicesCreateNestedManyWithoutTypeInput;

    @Field(() => TypeEfficacyCreateNestedManyWithoutDamageTypeInput, {nullable:true})
    efficacy?: TypeEfficacyCreateNestedManyWithoutDamageTypeInput;

    @Field(() => TypeEfficacyCreateNestedManyWithoutTargetTypeInput, {nullable:true})
    efficacyTarget?: TypeEfficacyCreateNestedManyWithoutTargetTypeInput;

    @Field(() => BerryFlavorsCreateNestedManyWithoutTypeInput, {nullable:true})
    berryFlavors?: BerryFlavorsCreateNestedManyWithoutTypeInput;

    @Field(() => PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput, {nullable:true})
    knownMoveTypes?: PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput;

    @Field(() => PokemonEvolutionCreateNestedManyWithoutPartyTypeInput, {nullable:true})
    partyTypes?: PokemonEvolutionCreateNestedManyWithoutPartyTypeInput;
}
