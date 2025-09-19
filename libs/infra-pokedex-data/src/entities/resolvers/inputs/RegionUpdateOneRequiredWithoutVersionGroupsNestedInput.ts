import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateOrConnectWithoutVersionGroupsInput } from "../inputs/RegionCreateOrConnectWithoutVersionGroupsInput";
import { RegionCreateWithoutVersionGroupsInput } from "../inputs/RegionCreateWithoutVersionGroupsInput";
import { RegionUpdateToOneWithWhereWithoutVersionGroupsInput } from "../inputs/RegionUpdateToOneWithWhereWithoutVersionGroupsInput";
import { RegionUpsertWithoutVersionGroupsInput } from "../inputs/RegionUpsertWithoutVersionGroupsInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionUpdateOneRequiredWithoutVersionGroupsNestedInput", {})
export class RegionUpdateOneRequiredWithoutVersionGroupsNestedInput {
  @TypeGraphQL.Field(_type => RegionCreateWithoutVersionGroupsInput, {
    nullable: true
  })
  create?: RegionCreateWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => RegionCreateOrConnectWithoutVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: RegionCreateOrConnectWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpsertWithoutVersionGroupsInput, {
    nullable: true
  })
  upsert?: RegionUpsertWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateToOneWithWhereWithoutVersionGroupsInput, {
    nullable: true
  })
  update?: RegionUpdateToOneWithWhereWithoutVersionGroupsInput | undefined;
}
