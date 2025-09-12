import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput";
import { VersionGroupsCreateWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupsCreateWithoutPokedexVersionGroupsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput", {})
export class VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutPokedexVersionGroupsInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutPokedexVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;
}
