import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Items } from "../../models/Items";
import { Moves } from "../../models/Moves";
import { VersionGroups } from "../../models/VersionGroups";

@TypeGraphQL.ObjectType("CreateManyAndReturnMachines", {})
export class CreateManyAndReturnMachines {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  machine_number!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  item_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_id!: number;

  @TypeGraphQL.Field(_type => VersionGroups, {
    nullable: false
  })
  versionGroup!: VersionGroups;

  @TypeGraphQL.Field(_type => Items, {
    nullable: false
  })
  item!: Items;

  @TypeGraphQL.Field(_type => Moves, {
    nullable: false
  })
  move!: Moves;
}
