import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateOrConnectWithoutGenerationsInput } from "../inputs/RegionCreateOrConnectWithoutGenerationsInput";
import { RegionCreateWithoutGenerationsInput } from "../inputs/RegionCreateWithoutGenerationsInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateNestedOneWithoutGenerationsInput", {})
export class RegionCreateNestedOneWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => RegionCreateWithoutGenerationsInput, {
    nullable: true
  })
  create?: RegionCreateWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionCreateOrConnectWithoutGenerationsInput, {
    nullable: true
  })
  connectOrCreate?: RegionCreateOrConnectWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionWhereUniqueInput | undefined;
}
