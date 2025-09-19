import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionUpdateWithoutVersionGroupsInput } from "../inputs/RegionUpdateWithoutVersionGroupsInput";
import { RegionWhereInput } from "../inputs/RegionWhereInput";

@TypeGraphQL.InputType("RegionUpdateToOneWithWhereWithoutVersionGroupsInput", {})
export class RegionUpdateToOneWithWhereWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  where?: RegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  data!: RegionUpdateWithoutVersionGroupsInput;
}
