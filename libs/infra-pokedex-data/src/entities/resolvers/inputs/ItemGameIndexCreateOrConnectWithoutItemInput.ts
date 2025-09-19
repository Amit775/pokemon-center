import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexCreateWithoutItemInput } from "../inputs/ItemGameIndexCreateWithoutItemInput";
import { ItemGameIndexWhereUniqueInput } from "../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndexCreateOrConnectWithoutItemInput", {})
export class ItemGameIndexCreateOrConnectWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndexCreateWithoutItemInput, {
    nullable: false
  })
  create!: ItemGameIndexCreateWithoutItemInput;
}
