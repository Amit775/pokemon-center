import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateNestedOneWithoutVersionGroupsInput } from "../inputs/PokedexesCreateNestedOneWithoutVersionGroupsInput";

@TypeGraphQL.InputType("PokedexVersionGroupsCreateWithoutVersionGroupInput", {})
export class PokedexVersionGroupsCreateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokedexesCreateNestedOneWithoutVersionGroupsInput, {
    nullable: false
  })
  pokedex!: PokedexesCreateNestedOneWithoutVersionGroupsInput;
}
