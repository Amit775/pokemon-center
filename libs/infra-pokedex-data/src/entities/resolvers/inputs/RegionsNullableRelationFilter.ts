import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsWhereInput } from "../inputs/RegionsWhereInput";

@TypeGraphQL.InputType("RegionsNullableRelationFilter", {})
export class RegionsNullableRelationFilter {
  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  is?: RegionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  isNot?: RegionsWhereInput | undefined;
}
