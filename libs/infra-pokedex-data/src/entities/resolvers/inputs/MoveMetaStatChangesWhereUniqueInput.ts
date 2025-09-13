import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MoveMetaRelationFilter } from "../inputs/MoveMetaRelationFilter";
import { MoveMetaStatChangesMove_idStat_idCompoundUniqueInput } from "../inputs/MoveMetaStatChangesMove_idStat_idCompoundUniqueInput";
import { MoveMetaStatChangesWhereInput } from "../inputs/MoveMetaStatChangesWhereInput";
import { MovesRelationFilter } from "../inputs/MovesRelationFilter";
import { StatsRelationFilter } from "../inputs/StatsRelationFilter";

@TypeGraphQL.InputType("MoveMetaStatChangesWhereUniqueInput", {})
export class MoveMetaStatChangesWhereUniqueInput {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesMove_idStat_idCompoundUniqueInput, {
    nullable: true
  })
  move_id_stat_id?: MoveMetaStatChangesMove_idStat_idCompoundUniqueInput | undefined;

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

  @TypeGraphQL.Field(_type => MovesRelationFilter, {
    nullable: true
  })
  move?: MovesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StatsRelationFilter, {
    nullable: true
  })
  stat?: StatsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveMetaRelationFilter, {
    nullable: true
  })
  meta?: MoveMetaRelationFilter | undefined;
}
