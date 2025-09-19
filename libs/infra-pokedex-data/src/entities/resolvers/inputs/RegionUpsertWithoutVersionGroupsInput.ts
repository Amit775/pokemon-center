import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutVersionGroupsInput } from "../inputs/RegionCreateWithoutVersionGroupsInput";
import { RegionUpdateWithoutVersionGroupsInput } from "../inputs/RegionUpdateWithoutVersionGroupsInput";
import { RegionWhereInput } from "../inputs/RegionWhereInput";

@TypeGraphQL.InputType("RegionUpsertWithoutVersionGroupsInput", {})
export class RegionUpsertWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => RegionUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  update!: RegionUpdateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: RegionCreateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  where?: RegionWhereInput | undefined;
}
