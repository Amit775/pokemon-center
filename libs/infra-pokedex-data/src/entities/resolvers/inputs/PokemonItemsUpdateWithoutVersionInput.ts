import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput } from "../inputs/ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput";
import { PokemonUpdateOneRequiredWithoutItemsNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutItemsNestedInput";

@TypeGraphQL.InputType("PokemonItemsUpdateWithoutVersionInput", {})
export class PokemonItemsUpdateWithoutVersionInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rarity?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutItemsNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput, {
    nullable: true
  })
  item?: ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput | undefined;
}
