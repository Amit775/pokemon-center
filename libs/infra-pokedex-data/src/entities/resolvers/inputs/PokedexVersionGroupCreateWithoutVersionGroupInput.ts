import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateNestedOneWithoutVersionGroupsInput } from "../inputs/PokedexCreateNestedOneWithoutVersionGroupsInput";

@TypeGraphQL.InputType("PokedexVersionGroupCreateWithoutVersionGroupInput", {})
export class PokedexVersionGroupCreateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokedexCreateNestedOneWithoutVersionGroupsInput, {
    nullable: false
  })
  pokedex!: PokedexCreateNestedOneWithoutVersionGroupsInput;
}
