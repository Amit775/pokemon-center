import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateOneRequiredWithoutPokemonItemsNestedInput } from "../inputs/ItemUpdateOneRequiredWithoutPokemonItemsNestedInput";
import { PokemonUpdateOneRequiredWithoutItemsNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutItemsNestedInput";
import { VersionUpdateOneRequiredWithoutPokemonItemsNestedInput } from "../inputs/VersionUpdateOneRequiredWithoutPokemonItemsNestedInput";

@TypeGraphQL.InputType("PokemonItemUpdateInput", {})
export class PokemonItemUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rarity?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutItemsNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionUpdateOneRequiredWithoutPokemonItemsNestedInput, {
    nullable: true
  })
  version?: VersionUpdateOneRequiredWithoutPokemonItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateOneRequiredWithoutPokemonItemsNestedInput, {
    nullable: true
  })
  item?: ItemUpdateOneRequiredWithoutPokemonItemsNestedInput | undefined;
}
