import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput } from "../inputs/ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput";
import { PokemonUpdateOneRequiredWithoutItemsNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutItemsNestedInput";
import { VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput } from "../inputs/VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput";

@TypeGraphQL.InputType("PokemonItemsUpdateInput", {})
export class PokemonItemsUpdateInput {
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

  @TypeGraphQL.Field(_type => ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput, {
    nullable: true
  })
  item?: ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput | undefined;
}
