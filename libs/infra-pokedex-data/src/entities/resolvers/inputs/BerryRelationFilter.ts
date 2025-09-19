import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryWhereInput } from "../inputs/BerryWhereInput";

@TypeGraphQL.InputType("BerryRelationFilter", {})
export class BerryRelationFilter {
  @TypeGraphQL.Field(_type => BerryWhereInput, {
    nullable: true
  })
  is?: BerryWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerryWhereInput, {
    nullable: true
  })
  isNot?: BerryWhereInput | undefined;
}
