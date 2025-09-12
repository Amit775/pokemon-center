import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesWhereInput } from "../inputs/MoveMetaStatChangesWhereInput";

@TypeGraphQL.InputType("MoveMetaStatChangesListRelationFilter", {})
export class MoveMetaStatChangesListRelationFilter {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereInput, {
    nullable: true
  })
  every?: MoveMetaStatChangesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereInput, {
    nullable: true
  })
  some?: MoveMetaStatChangesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereInput, {
    nullable: true
  })
  none?: MoveMetaStatChangesWhereInput | undefined;
}
