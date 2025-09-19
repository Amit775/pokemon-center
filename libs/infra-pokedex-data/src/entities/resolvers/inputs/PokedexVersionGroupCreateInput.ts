import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateNestedOneWithoutVersionGroupsInput } from "../inputs/PokedexCreateNestedOneWithoutVersionGroupsInput";
import { VersionGroupCreateNestedOneWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupCreateNestedOneWithoutPokedexVersionGroupsInput";

@TypeGraphQL.InputType("PokedexVersionGroupCreateInput", {})
export class PokedexVersionGroupCreateInput {
  @TypeGraphQL.Field(_type => PokedexCreateNestedOneWithoutVersionGroupsInput, {
    nullable: false
  })
  pokedex!: PokedexCreateNestedOneWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateNestedOneWithoutPokedexVersionGroupsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupCreateNestedOneWithoutPokedexVersionGroupsInput;
}
