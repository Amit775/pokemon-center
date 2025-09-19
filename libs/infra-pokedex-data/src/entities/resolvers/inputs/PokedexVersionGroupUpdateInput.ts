import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/PokedexUpdateOneRequiredWithoutVersionGroupsNestedInput";
import { VersionGroupUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput";

@TypeGraphQL.InputType("PokedexVersionGroupUpdateInput", {})
export class PokedexVersionGroupUpdateInput {
  @TypeGraphQL.Field(_type => PokedexUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  pokedex?: PokedexUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput | undefined;
}
