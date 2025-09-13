import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput";

@TypeGraphQL.InputType("PokedexVersionGroupsCreateWithoutPokedexInput", {})
export class PokedexVersionGroupsCreateWithoutPokedexInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput;
}
