import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput } from "../inputs/ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput";
import { VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput } from "../inputs/VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput";

@TypeGraphQL.InputType("PokemonItemsUpdateWithoutPokemonInput", {})
export class PokemonItemsUpdateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rarity?: number | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput, {
    nullable: true
  })
  version?: VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput, {
    nullable: true
  })
  item?: ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput | undefined;
}
