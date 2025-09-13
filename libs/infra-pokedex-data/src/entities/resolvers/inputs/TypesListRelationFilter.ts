import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesListRelationFilter", {})
export class TypesListRelationFilter {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  every?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  some?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  none?: TypesWhereInput | undefined;
}
