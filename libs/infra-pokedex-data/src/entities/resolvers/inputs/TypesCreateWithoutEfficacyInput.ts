import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateNestedManyWithoutNaturalGiftTypeInput } from "../inputs/BerriesCreateNestedManyWithoutNaturalGiftTypeInput";
import { BerryFlavorsCreateNestedManyWithoutTypeInput } from "../inputs/BerryFlavorsCreateNestedManyWithoutTypeInput";
import { GenerationsCreateNestedOneWithoutTypesInput } from "../inputs/GenerationsCreateNestedOneWithoutTypesInput";
import { MoveDamageClassesCreateNestedOneWithoutTypesInput } from "../inputs/MoveDamageClassesCreateNestedOneWithoutTypesInput";
import { MovesCreateNestedManyWithoutTypeInput } from "../inputs/MovesCreateNestedManyWithoutTypeInput";
import { NaturesCreateNestedManyWithoutDecreasedStatTypesInput } from "../inputs/NaturesCreateNestedManyWithoutDecreasedStatTypesInput";
import { NaturesCreateNestedManyWithoutIncreasedStatTypesInput } from "../inputs/NaturesCreateNestedManyWithoutIncreasedStatTypesInput";
import { PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput";
import { PokemonEvolutionCreateNestedManyWithoutPartyTypeInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutPartyTypeInput";
import { PokemonFormTypesCreateNestedManyWithoutTypeInput } from "../inputs/PokemonFormTypesCreateNestedManyWithoutTypeInput";
import { PokemonTypesCreateNestedManyWithoutTypeInput } from "../inputs/PokemonTypesCreateNestedManyWithoutTypeInput";
import { TypeEfficacyCreateNestedManyWithoutTargetTypeInput } from "../inputs/TypeEfficacyCreateNestedManyWithoutTargetTypeInput";
import { TypeGameIndicesCreateNestedManyWithoutTypeInput } from "../inputs/TypeGameIndicesCreateNestedManyWithoutTypeInput";

@TypeGraphQL.InputType("TypesCreateWithoutEfficacyInput", {})
export class TypesCreateWithoutEfficacyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => GenerationsCreateNestedOneWithoutTypesInput, {
    nullable: false
  })
  generation!: GenerationsCreateNestedOneWithoutTypesInput;

  @TypeGraphQL.Field(_type => MoveDamageClassesCreateNestedOneWithoutTypesInput, {
    nullable: true
  })
  damageClass?: MoveDamageClassesCreateNestedOneWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateNestedManyWithoutTypeInput, {
    nullable: true
  })
  moves?: MovesCreateNestedManyWithoutTypeInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesCreateNestedManyWithoutTypeInput, {
    nullable: true
  })
  pokemonTypes?: PokemonTypesCreateNestedManyWithoutTypeInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesCreateNestedManyWithoutTypeInput, {
    nullable: true
  })
  formTypes?: PokemonFormTypesCreateNestedManyWithoutTypeInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesCreateNestedManyWithoutTypeInput, {
    nullable: true
  })
  gameIndices?: TypeGameIndicesCreateNestedManyWithoutTypeInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyCreateNestedManyWithoutTargetTypeInput, {
    nullable: true
  })
  efficacyTarget?: TypeEfficacyCreateNestedManyWithoutTargetTypeInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateNestedManyWithoutTypeInput, {
    nullable: true
  })
  berryFlavors?: BerryFlavorsCreateNestedManyWithoutTypeInput | undefined;

  @TypeGraphQL.Field(_type => NaturesCreateNestedManyWithoutDecreasedStatTypesInput, {
    nullable: true
  })
  natures?: NaturesCreateNestedManyWithoutDecreasedStatTypesInput | undefined;

  @TypeGraphQL.Field(_type => NaturesCreateNestedManyWithoutIncreasedStatTypesInput, {
    nullable: true
  })
  naturesIncreased?: NaturesCreateNestedManyWithoutIncreasedStatTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput, {
    nullable: true
  })
  knownMoveTypes?: PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutPartyTypeInput, {
    nullable: true
  })
  partyTypes?: PokemonEvolutionCreateNestedManyWithoutPartyTypeInput | undefined;

  @TypeGraphQL.Field(_type => BerriesCreateNestedManyWithoutNaturalGiftTypeInput, {
    nullable: true
  })
  naturalGiftTypes?: BerriesCreateNestedManyWithoutNaturalGiftTypeInput | undefined;
}
