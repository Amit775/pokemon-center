import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemsRelationFilter } from "../inputs/ItemsRelationFilter";
import { MovesRelationFilter } from "../inputs/MovesRelationFilter";
import { VersionGroupsRelationFilter } from "../inputs/VersionGroupsRelationFilter";

@TypeGraphQL.InputType("MachinesWhereInput", {})
export class MachinesWhereInput {
  @TypeGraphQL.Field(_type => [MachinesWhereInput], {
    nullable: true
  })
  AND?: MachinesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesWhereInput], {
    nullable: true
  })
  OR?: MachinesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesWhereInput], {
    nullable: true
  })
  NOT?: MachinesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => VersionGroupsRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemsRelationFilter, {
    nullable: true
  })
  item?: ItemsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovesRelationFilter, {
    nullable: true
  })
  move?: MovesRelationFilter | undefined;
}
