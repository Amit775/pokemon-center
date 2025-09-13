import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsWhereInput } from "../inputs/EggGroupsWhereInput";

@TypeGraphQL.InputType("EggGroupsRelationFilter", {})
export class EggGroupsRelationFilter {
  @TypeGraphQL.Field(_type => EggGroupsWhereInput, {
    nullable: true
  })
  is?: EggGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupsWhereInput, {
    nullable: true
  })
  isNot?: EggGroupsWhereInput | undefined;
}
