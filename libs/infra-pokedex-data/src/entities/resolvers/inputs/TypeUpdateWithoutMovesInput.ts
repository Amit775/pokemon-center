import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorUpdateManyWithoutTypeNestedInput } from "../inputs/BerryFlavorUpdateManyWithoutTypeNestedInput";
import { BerryUpdateManyWithoutNaturalGiftTypeNestedInput } from "../inputs/BerryUpdateManyWithoutNaturalGiftTypeNestedInput";
import { GenerationUpdateOneRequiredWithoutTypesNestedInput } from "../inputs/GenerationUpdateOneRequiredWithoutTypesNestedInput";
import { MoveDamageClassUpdateOneWithoutTypesNestedInput } from "../inputs/MoveDamageClassUpdateOneWithoutTypesNestedInput";
import { NatureUpdateManyWithoutDecreasedStatTypesNestedInput } from "../inputs/NatureUpdateManyWithoutDecreasedStatTypesNestedInput";
import { NatureUpdateManyWithoutIncreasedStatTypesNestedInput } from "../inputs/NatureUpdateManyWithoutIncreasedStatTypesNestedInput";
import { PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput";
import { PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput";
import { PokemonFormTypeUpdateManyWithoutTypeNestedInput } from "../inputs/PokemonFormTypeUpdateManyWithoutTypeNestedInput";
import { PokemonTypeUpdateManyWithoutTypeNestedInput } from "../inputs/PokemonTypeUpdateManyWithoutTypeNestedInput";
import { TypeEfficacyUpdateManyWithoutDamageTypeNestedInput } from "../inputs/TypeEfficacyUpdateManyWithoutDamageTypeNestedInput";
import { TypeEfficacyUpdateManyWithoutTargetTypeNestedInput } from "../inputs/TypeEfficacyUpdateManyWithoutTargetTypeNestedInput";
import { TypeGameIndexUpdateManyWithoutTypeNestedInput } from "../inputs/TypeGameIndexUpdateManyWithoutTypeNestedInput";

@TypeGraphQL.InputType("TypeUpdateWithoutMovesInput", {})
export class TypeUpdateWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateOneRequiredWithoutTypesNestedInput, {
    nullable: true
  })
  generation?: GenerationUpdateOneRequiredWithoutTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassUpdateOneWithoutTypesNestedInput, {
    nullable: true
  })
  damageClass?: MoveDamageClassUpdateOneWithoutTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeUpdateManyWithoutTypeNestedInput, {
    nullable: true
  })
  pokemonTypes?: PokemonTypeUpdateManyWithoutTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeUpdateManyWithoutTypeNestedInput, {
    nullable: true
  })
  formTypes?: PokemonFormTypeUpdateManyWithoutTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexUpdateManyWithoutTypeNestedInput, {
    nullable: true
  })
  gameIndices?: TypeGameIndexUpdateManyWithoutTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyUpdateManyWithoutDamageTypeNestedInput, {
    nullable: true
  })
  efficacy?: TypeEfficacyUpdateManyWithoutDamageTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyUpdateManyWithoutTargetTypeNestedInput, {
    nullable: true
  })
  efficacyTarget?: TypeEfficacyUpdateManyWithoutTargetTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorUpdateManyWithoutTypeNestedInput, {
    nullable: true
  })
  berryFlavors?: BerryFlavorUpdateManyWithoutTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => NatureUpdateManyWithoutDecreasedStatTypesNestedInput, {
    nullable: true
  })
  natures?: NatureUpdateManyWithoutDecreasedStatTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => NatureUpdateManyWithoutIncreasedStatTypesNestedInput, {
    nullable: true
  })
  naturesIncreased?: NatureUpdateManyWithoutIncreasedStatTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput, {
    nullable: true
  })
  knownMoveTypes?: PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput, {
    nullable: true
  })
  partyTypes?: PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => BerryUpdateManyWithoutNaturalGiftTypeNestedInput, {
    nullable: true
  })
  naturalGiftTypes?: BerryUpdateManyWithoutNaturalGiftTypeNestedInput | undefined;
}
