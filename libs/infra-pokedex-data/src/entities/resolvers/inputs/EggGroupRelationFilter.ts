import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupWhereInput } from "../inputs/EggGroupWhereInput";

@TypeGraphQL.InputType("EggGroupRelationFilter", {})
export class EggGroupRelationFilter {
  @TypeGraphQL.Field(_type => EggGroupWhereInput, {
    nullable: true
  })
  is?: EggGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupWhereInput, {
    nullable: true
  })
  isNot?: EggGroupWhereInput | undefined;
}
