import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesWhereInput } from "../inputs/GrowthRatesWhereInput";

@TypeGraphQL.InputType("GrowthRatesRelationFilter", {})
export class GrowthRatesRelationFilter {
  @TypeGraphQL.Field(_type => GrowthRatesWhereInput, {
    nullable: true
  })
  is?: GrowthRatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesWhereInput, {
    nullable: true
  })
  isNot?: GrowthRatesWhereInput | undefined;
}
