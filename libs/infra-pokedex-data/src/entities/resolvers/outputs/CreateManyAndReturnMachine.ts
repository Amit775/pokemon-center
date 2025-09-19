import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Item } from "../../models/Item";
import { Move } from "../../models/Move";
import { VersionGroup } from "../../models/VersionGroup";

@TypeGraphQL.ObjectType("CreateManyAndReturnMachine", {})
export class CreateManyAndReturnMachine {
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

  @TypeGraphQL.Field(_type => VersionGroup, {
    nullable: false
  })
  versionGroup!: VersionGroup;

  @TypeGraphQL.Field(_type => Item, {
    nullable: false
  })
  item!: Item;

  @TypeGraphQL.Field(_type => Move, {
    nullable: false
  })
  move!: Move;
}
