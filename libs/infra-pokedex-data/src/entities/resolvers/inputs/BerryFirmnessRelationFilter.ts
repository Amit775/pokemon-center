import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessWhereInput } from "../inputs/BerryFirmnessWhereInput";

@TypeGraphQL.InputType("BerryFirmnessRelationFilter", {})
export class BerryFirmnessRelationFilter {
  @TypeGraphQL.Field(_type => BerryFirmnessWhereInput, {
    nullable: true
  })
  is?: BerryFirmnessWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessWhereInput, {
    nullable: true
  })
  isNot?: BerryFirmnessWhereInput | undefined;
}
