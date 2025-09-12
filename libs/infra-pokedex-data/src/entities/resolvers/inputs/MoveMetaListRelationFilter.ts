import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaWhereInput } from "../inputs/MoveMetaWhereInput";

@TypeGraphQL.InputType("MoveMetaListRelationFilter", {})
export class MoveMetaListRelationFilter {
  @TypeGraphQL.Field(_type => MoveMetaWhereInput, {
    nullable: true
  })
  every?: MoveMetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaWhereInput, {
    nullable: true
  })
  some?: MoveMetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaWhereInput, {
    nullable: true
  })
  none?: MoveMetaWhereInput | undefined;
}
