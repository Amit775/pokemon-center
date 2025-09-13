import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyWhereInput } from "../inputs/TypeEfficacyWhereInput";

@TypeGraphQL.InputType("TypeEfficacyListRelationFilter", {})
export class TypeEfficacyListRelationFilter {
  @TypeGraphQL.Field(_type => TypeEfficacyWhereInput, {
    nullable: true
  })
  every?: TypeEfficacyWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyWhereInput, {
    nullable: true
  })
  some?: TypeEfficacyWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyWhereInput, {
    nullable: true
  })
  none?: TypeEfficacyWhereInput | undefined;
}
