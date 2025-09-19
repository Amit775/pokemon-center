import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/PokedexUpdateOneRequiredWithoutVersionGroupsNestedInput";

@TypeGraphQL.InputType("PokedexVersionGroupUpdateWithoutVersionGroupInput", {})
export class PokedexVersionGroupUpdateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokedexUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  pokedex?: PokedexUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;
}
