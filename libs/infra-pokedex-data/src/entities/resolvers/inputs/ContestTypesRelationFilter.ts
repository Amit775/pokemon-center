import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesWhereInput } from "../inputs/ContestTypesWhereInput";

@TypeGraphQL.InputType("ContestTypesRelationFilter", {})
export class ContestTypesRelationFilter {
  @TypeGraphQL.Field(_type => ContestTypesWhereInput, {
    nullable: true
  })
  is?: ContestTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesWhereInput, {
    nullable: true
  })
  isNot?: ContestTypesWhereInput | undefined;
}
