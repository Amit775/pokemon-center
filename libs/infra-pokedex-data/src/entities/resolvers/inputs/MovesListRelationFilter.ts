import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesListRelationFilter", {})
export class MovesListRelationFilter {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  every?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  some?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  none?: MovesWhereInput | undefined;
}
