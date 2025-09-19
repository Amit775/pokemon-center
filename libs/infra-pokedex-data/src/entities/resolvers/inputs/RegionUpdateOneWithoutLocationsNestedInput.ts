import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateOrConnectWithoutLocationsInput } from "../inputs/RegionCreateOrConnectWithoutLocationsInput";
import { RegionCreateWithoutLocationsInput } from "../inputs/RegionCreateWithoutLocationsInput";
import { RegionUpdateToOneWithWhereWithoutLocationsInput } from "../inputs/RegionUpdateToOneWithWhereWithoutLocationsInput";
import { RegionUpsertWithoutLocationsInput } from "../inputs/RegionUpsertWithoutLocationsInput";
import { RegionWhereInput } from "../inputs/RegionWhereInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionUpdateOneWithoutLocationsNestedInput", {})
export class RegionUpdateOneWithoutLocationsNestedInput {
  @TypeGraphQL.Field(_type => RegionCreateWithoutLocationsInput, {
    nullable: true
  })
  create?: RegionCreateWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionCreateOrConnectWithoutLocationsInput, {
    nullable: true
  })
  connectOrCreate?: RegionCreateOrConnectWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpsertWithoutLocationsInput, {
    nullable: true
  })
  upsert?: RegionUpsertWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  disconnect?: RegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  delete?: RegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateToOneWithWhereWithoutLocationsInput, {
    nullable: true
  })
  update?: RegionUpdateToOneWithWhereWithoutLocationsInput | undefined;
}
