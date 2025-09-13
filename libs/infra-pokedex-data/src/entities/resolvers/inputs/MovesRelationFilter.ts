import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesRelationFilter", {})
export class MovesRelationFilter {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  is?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  isNot?: MovesWhereInput | undefined;
}
