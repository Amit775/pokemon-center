import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateOneRequiredWithoutItemsNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutItemsNestedInput";
import { VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput } from "../inputs/VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput";

@TypeGraphQL.InputType("PokemonItemsUpdateWithoutItemInput", {})
export class PokemonItemsUpdateWithoutItemInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rarity?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutItemsNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput, {
    nullable: true
  })
  version?: VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput | undefined;
}
