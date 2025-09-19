import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeListRelationFilter", {})
export class TypeListRelationFilter {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  every?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  some?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  none?: TypeWhereInput | undefined;
}
