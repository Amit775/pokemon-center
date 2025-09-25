import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MoveMetaRelationFilter } from "../inputs/MoveMetaRelationFilter";
import { StatRelationFilter } from "../inputs/StatRelationFilter";

@TypeGraphQL.InputType("MoveMetaStatChangesWhereInput", {})
export class MoveMetaStatChangesWhereInput {
  @TypeGraphQL.Field(_type => [MoveMetaStatChangesWhereInput], {
    nullable: true
  })
  AND?: MoveMetaStatChangesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesWhereInput], {
    nullable: true
  })
  OR?: MoveMetaStatChangesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesWhereInput], {
    nullable: true
  })
  NOT?: MoveMetaStatChangesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StatRelationFilter, {
    nullable: true
  })
  stat?: StatRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveMetaRelationFilter, {
    nullable: true
  })
  meta?: MoveMetaRelationFilter | undefined;
}
