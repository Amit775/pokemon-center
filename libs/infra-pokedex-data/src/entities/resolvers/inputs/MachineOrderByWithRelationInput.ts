import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemOrderByWithRelationInput } from "../inputs/ItemOrderByWithRelationInput";
import { MoveOrderByWithRelationInput } from "../inputs/MoveOrderByWithRelationInput";
import { VersionGroupOrderByWithRelationInput } from "../inputs/VersionGroupOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MachineOrderByWithRelationInput", {})
export class MachineOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  machine_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VersionGroupOrderByWithRelationInput, {
    nullable: true
  })
  versionGroup?: VersionGroupOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ItemOrderByWithRelationInput, {
    nullable: true
  })
  item?: ItemOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveOrderByWithRelationInput, {
    nullable: true
  })
  move?: MoveOrderByWithRelationInput | undefined;
}
