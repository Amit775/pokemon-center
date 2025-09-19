import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveListRelationFilter", {})
export class MoveListRelationFilter {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  every?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  some?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  none?: MoveWhereInput | undefined;
}
