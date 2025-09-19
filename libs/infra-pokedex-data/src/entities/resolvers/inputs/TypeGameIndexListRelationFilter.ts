import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexWhereInput } from "../inputs/TypeGameIndexWhereInput";

@TypeGraphQL.InputType("TypeGameIndexListRelationFilter", {})
export class TypeGameIndexListRelationFilter {
  @TypeGraphQL.Field(_type => TypeGameIndexWhereInput, {
    nullable: true
  })
  every?: TypeGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexWhereInput, {
    nullable: true
  })
  some?: TypeGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexWhereInput, {
    nullable: true
  })
  none?: TypeGameIndexWhereInput | undefined;
}
