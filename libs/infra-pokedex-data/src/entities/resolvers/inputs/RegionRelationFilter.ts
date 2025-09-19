import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionWhereInput } from "../inputs/RegionWhereInput";

@TypeGraphQL.InputType("RegionRelationFilter", {})
export class RegionRelationFilter {
  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  is?: RegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  isNot?: RegionWhereInput | undefined;
}
