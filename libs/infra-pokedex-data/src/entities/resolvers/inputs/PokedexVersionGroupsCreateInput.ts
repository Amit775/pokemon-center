import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateNestedOneWithoutVersionGroupsInput } from "../inputs/PokedexesCreateNestedOneWithoutVersionGroupsInput";
import { VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput";

@TypeGraphQL.InputType("PokedexVersionGroupsCreateInput", {})
export class PokedexVersionGroupsCreateInput {
  @TypeGraphQL.Field(_type => PokedexesCreateNestedOneWithoutVersionGroupsInput, {
    nullable: false
  })
  pokedex!: PokedexesCreateNestedOneWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput;
}
