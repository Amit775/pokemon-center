import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateNestedManyWithoutNaturalGiftTypeInput } from "../inputs/BerryCreateNestedManyWithoutNaturalGiftTypeInput";
import { BerryFlavorCreateNestedManyWithoutTypeInput } from "../inputs/BerryFlavorCreateNestedManyWithoutTypeInput";
import { GenerationCreateNestedOneWithoutTypesInput } from "../inputs/GenerationCreateNestedOneWithoutTypesInput";
import { MoveDamageClassCreateNestedOneWithoutTypesInput } from "../inputs/MoveDamageClassCreateNestedOneWithoutTypesInput";
import { NatureCreateNestedManyWithoutDecreasedStatTypesInput } from "../inputs/NatureCreateNestedManyWithoutDecreasedStatTypesInput";
import { NatureCreateNestedManyWithoutIncreasedStatTypesInput } from "../inputs/NatureCreateNestedManyWithoutIncreasedStatTypesInput";
import { PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput";
import { PokemonEvolutionCreateNestedManyWithoutPartyTypeInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutPartyTypeInput";
import { PokemonFormTypeCreateNestedManyWithoutTypeInput } from "../inputs/PokemonFormTypeCreateNestedManyWithoutTypeInput";
import { PokemonTypeCreateNestedManyWithoutTypeInput } from "../inputs/PokemonTypeCreateNestedManyWithoutTypeInput";
import { TypeEfficacyCreateNestedManyWithoutDamageTypeInput } from "../inputs/TypeEfficacyCreateNestedManyWithoutDamageTypeInput";
import { TypeEfficacyCreateNestedManyWithoutTargetTypeInput } from "../inputs/TypeEfficacyCreateNestedManyWithoutTargetTypeInput";
import { TypeGameIndexCreateNestedManyWithoutTypeInput } from "../inputs/TypeGameIndexCreateNestedManyWithoutTypeInput";

@TypeGraphQL.InputType("TypeCreateWithoutMovesInput", {})
export class TypeCreateWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => GenerationCreateNestedOneWithoutTypesInput, {
    nullable: false
  })
  generation!: GenerationCreateNestedOneWithoutTypesInput;

  @TypeGraphQL.Field(_type => MoveDamageClassCreateNestedOneWithoutTypesInput, {
    nullable: true
  })
  damageClass?: MoveDamageClassCreateNestedOneWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeCreateNestedManyWithoutTypeInput, {
    nullable: true
  })
  pokemonTypes?: PokemonTypeCreateNestedManyWithoutTypeInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeCreateNestedManyWithoutTypeInput, {
    nullable: true
  })
  formTypes?: PokemonFormTypeCreateNestedManyWithoutTypeInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexCreateNestedManyWithoutTypeInput, {
    nullable: true
  })
  gameIndices?: TypeGameIndexCreateNestedManyWithoutTypeInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyCreateNestedManyWithoutDamageTypeInput, {
    nullable: true
  })
  efficacy?: TypeEfficacyCreateNestedManyWithoutDamageTypeInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyCreateNestedManyWithoutTargetTypeInput, {
    nullable: true
  })
  efficacyTarget?: TypeEfficacyCreateNestedManyWithoutTargetTypeInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorCreateNestedManyWithoutTypeInput, {
    nullable: true
  })
  berryFlavors?: BerryFlavorCreateNestedManyWithoutTypeInput | undefined;

  @TypeGraphQL.Field(_type => NatureCreateNestedManyWithoutDecreasedStatTypesInput, {
    nullable: true
  })
  natures?: NatureCreateNestedManyWithoutDecreasedStatTypesInput | undefined;

  @TypeGraphQL.Field(_type => NatureCreateNestedManyWithoutIncreasedStatTypesInput, {
    nullable: true
  })
  naturesIncreased?: NatureCreateNestedManyWithoutIncreasedStatTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput, {
    nullable: true
  })
  knownMoveTypes?: PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutPartyTypeInput, {
    nullable: true
  })
  partyTypes?: PokemonEvolutionCreateNestedManyWithoutPartyTypeInput | undefined;

  @TypeGraphQL.Field(_type => BerryCreateNestedManyWithoutNaturalGiftTypeInput, {
    nullable: true
  })
  naturalGiftTypes?: BerryCreateNestedManyWithoutNaturalGiftTypeInput | undefined;
}
