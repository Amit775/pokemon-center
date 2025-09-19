import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutVersionGroupsInput } from "../inputs/RegionCreateWithoutVersionGroupsInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateOrConnectWithoutVersionGroupsInput", {})
export class RegionCreateOrConnectWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: false
  })
  where!: RegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: RegionCreateWithoutVersionGroupsInput;
}
