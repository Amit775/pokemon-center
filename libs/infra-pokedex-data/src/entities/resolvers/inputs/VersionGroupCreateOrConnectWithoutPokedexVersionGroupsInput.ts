import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupCreateWithoutPokedexVersionGroupsInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateOrConnectWithoutPokedexVersionGroupsInput", {})
export class VersionGroupCreateOrConnectWithoutPokedexVersionGroupsInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutPokedexVersionGroupsInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutPokedexVersionGroupsInput;
}
