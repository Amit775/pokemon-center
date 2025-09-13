import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesWhereInput } from "../inputs/TypeGameIndicesWhereInput";

@TypeGraphQL.InputType("TypeGameIndicesListRelationFilter", {})
export class TypeGameIndicesListRelationFilter {
  @TypeGraphQL.Field(_type => TypeGameIndicesWhereInput, {
    nullable: true
  })
  every?: TypeGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesWhereInput, {
    nullable: true
  })
  some?: TypeGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesWhereInput, {
    nullable: true
  })
  none?: TypeGameIndicesWhereInput | undefined;
}
