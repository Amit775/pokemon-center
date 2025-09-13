import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput } from "../inputs/PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput";

@TypeGraphQL.InputType("PokedexVersionGroupsUpdateWithoutVersionGroupInput", {})
export class PokedexVersionGroupsUpdateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput, {
    nullable: true
  })
  pokedex?: PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput | undefined;
}
