import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemRelationFilter } from "../inputs/ItemRelationFilter";
import { MoveRelationFilter } from "../inputs/MoveRelationFilter";
import { VersionGroupRelationFilter } from "../inputs/VersionGroupRelationFilter";

@TypeGraphQL.InputType("MachineWhereInput", {})
export class MachineWhereInput {
  @TypeGraphQL.Field(_type => [MachineWhereInput], {
    nullable: true
  })
  AND?: MachineWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineWhereInput], {
    nullable: true
  })
  OR?: MachineWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineWhereInput], {
    nullable: true
  })
  NOT?: MachineWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  machine_number?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  item_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  move_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemRelationFilter, {
    nullable: true
  })
  item?: ItemRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveRelationFilter, {
    nullable: true
  })
  move?: MoveRelationFilter | undefined;
}
