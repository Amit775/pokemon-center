import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocket } from "../../models/ItemPocket";

@TypeGraphQL.ObjectType("CreateManyAndReturnItemCategory", {})
export class CreateManyAndReturnItemCategory {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pocket_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => ItemPocket, {
    nullable: false
  })
  pocket!: ItemPocket;
}
