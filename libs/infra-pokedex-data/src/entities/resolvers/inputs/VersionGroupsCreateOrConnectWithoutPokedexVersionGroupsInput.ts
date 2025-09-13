import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupsCreateWithoutPokedexVersionGroupsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput", {})
export class VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutPokedexVersionGroupsInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutPokedexVersionGroupsInput;
}
