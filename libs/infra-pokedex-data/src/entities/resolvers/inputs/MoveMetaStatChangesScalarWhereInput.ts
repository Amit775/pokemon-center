import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("MoveMetaStatChangesScalarWhereInput", {})
export class MoveMetaStatChangesScalarWhereInput {
  @TypeGraphQL.Field(_type => [MoveMetaStatChangesScalarWhereInput], {
    nullable: true
  })
  AND?: MoveMetaStatChangesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesScalarWhereInput], {
    nullable: true
  })
  OR?: MoveMetaStatChangesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesScalarWhereInput], {
    nullable: true
  })
  NOT?: MoveMetaStatChangesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  move_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stat_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  change?: IntFilter | undefined;
}
