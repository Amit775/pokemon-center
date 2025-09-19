import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateOrConnectWithoutLocationsInput } from "../inputs/RegionCreateOrConnectWithoutLocationsInput";
import { RegionCreateWithoutLocationsInput } from "../inputs/RegionCreateWithoutLocationsInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateNestedOneWithoutLocationsInput", {})
export class RegionCreateNestedOneWithoutLocationsInput {
  @TypeGraphQL.Field(_type => RegionCreateWithoutLocationsInput, {
    nullable: true
  })
  create?: RegionCreateWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionCreateOrConnectWithoutLocationsInput, {
    nullable: true
  })
  connectOrCreate?: RegionCreateOrConnectWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionWhereUniqueInput | undefined;
}
