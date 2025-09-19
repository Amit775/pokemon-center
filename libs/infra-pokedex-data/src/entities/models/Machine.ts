import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Item } from "../models/Item";
import { Move } from "../models/Move";
import { VersionGroup } from "../models/VersionGroup";

@TypeGraphQL.ObjectType("Machine", {})
export class Machine {
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

  versionGroup?: VersionGroup;

  item?: Item;

  move?: Move;
}
