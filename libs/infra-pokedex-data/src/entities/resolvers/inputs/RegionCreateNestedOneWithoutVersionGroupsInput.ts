import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateOrConnectWithoutVersionGroupsInput } from "../inputs/RegionCreateOrConnectWithoutVersionGroupsInput";
import { RegionCreateWithoutVersionGroupsInput } from "../inputs/RegionCreateWithoutVersionGroupsInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateNestedOneWithoutVersionGroupsInput", {})
export class RegionCreateNestedOneWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => RegionCreateWithoutVersionGroupsInput, {
    nullable: true
  })
  create?: RegionCreateWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => RegionCreateOrConnectWithoutVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: RegionCreateOrConnectWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionWhereUniqueInput | undefined;
}
