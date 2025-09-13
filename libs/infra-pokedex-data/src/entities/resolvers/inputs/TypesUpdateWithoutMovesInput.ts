import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesUpdateManyWithoutNaturalGiftTypeNestedInput } from "../inputs/BerriesUpdateManyWithoutNaturalGiftTypeNestedInput";
import { BerryFlavorsUpdateManyWithoutTypeNestedInput } from "../inputs/BerryFlavorsUpdateManyWithoutTypeNestedInput";
import { GenerationsUpdateOneRequiredWithoutTypesNestedInput } from "../inputs/GenerationsUpdateOneRequiredWithoutTypesNestedInput";
import { MoveDamageClassesUpdateOneWithoutTypesNestedInput } from "../inputs/MoveDamageClassesUpdateOneWithoutTypesNestedInput";
import { NaturesUpdateManyWithoutDecreasedStatTypesNestedInput } from "../inputs/NaturesUpdateManyWithoutDecreasedStatTypesNestedInput";
import { NaturesUpdateManyWithoutIncreasedStatTypesNestedInput } from "../inputs/NaturesUpdateManyWithoutIncreasedStatTypesNestedInput";
import { PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput";
import { PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput";
import { PokemonFormTypesUpdateManyWithoutTypeNestedInput } from "../inputs/PokemonFormTypesUpdateManyWithoutTypeNestedInput";
import { PokemonTypesUpdateManyWithoutTypeNestedInput } from "../inputs/PokemonTypesUpdateManyWithoutTypeNestedInput";
import { TypeEfficacyUpdateManyWithoutDamageTypeNestedInput } from "../inputs/TypeEfficacyUpdateManyWithoutDamageTypeNestedInput";
import { TypeEfficacyUpdateManyWithoutTargetTypeNestedInput } from "../inputs/TypeEfficacyUpdateManyWithoutTargetTypeNestedInput";
import { TypeGameIndicesUpdateManyWithoutTypeNestedInput } from "../inputs/TypeGameIndicesUpdateManyWithoutTypeNestedInput";

@TypeGraphQL.InputType("TypesUpdateWithoutMovesInput", {})
export class TypesUpdateWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateOneRequiredWithoutTypesNestedInput, {
    nullable: true
  })
  generation?: GenerationsUpdateOneRequiredWithoutTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesUpdateOneWithoutTypesNestedInput, {
    nullable: true
  })
  damageClass?: MoveDamageClassesUpdateOneWithoutTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesUpdateManyWithoutTypeNestedInput, {
    nullable: true
  })
  pokemonTypes?: PokemonTypesUpdateManyWithoutTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesUpdateManyWithoutTypeNestedInput, {
    nullable: true
  })
  formTypes?: PokemonFormTypesUpdateManyWithoutTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesUpdateManyWithoutTypeNestedInput, {
    nullable: true
  })
  gameIndices?: TypeGameIndicesUpdateManyWithoutTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyUpdateManyWithoutDamageTypeNestedInput, {
    nullable: true
  })
  efficacy?: TypeEfficacyUpdateManyWithoutDamageTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyUpdateManyWithoutTargetTypeNestedInput, {
    nullable: true
  })
  efficacyTarget?: TypeEfficacyUpdateManyWithoutTargetTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsUpdateManyWithoutTypeNestedInput, {
    nullable: true
  })
  berryFlavors?: BerryFlavorsUpdateManyWithoutTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => NaturesUpdateManyWithoutDecreasedStatTypesNestedInput, {
    nullable: true
  })
  natures?: NaturesUpdateManyWithoutDecreasedStatTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => NaturesUpdateManyWithoutIncreasedStatTypesNestedInput, {
    nullable: true
  })
  naturesIncreased?: NaturesUpdateManyWithoutIncreasedStatTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput, {
    nullable: true
  })
  knownMoveTypes?: PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput, {
    nullable: true
  })
  partyTypes?: PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => BerriesUpdateManyWithoutNaturalGiftTypeNestedInput, {
    nullable: true
  })
  naturalGiftTypes?: BerriesUpdateManyWithoutNaturalGiftTypeNestedInput | undefined;
}
