import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateNestedOneWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupCreateNestedOneWithoutPokedexVersionGroupsInput";

@TypeGraphQL.InputType("PokedexVersionGroupCreateWithoutPokedexInput", {})
export class PokedexVersionGroupCreateWithoutPokedexInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateNestedOneWithoutPokedexVersionGroupsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupCreateNestedOneWithoutPokedexVersionGroupsInput;
}
