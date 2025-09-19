import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexCreateWithoutItemInput } from "../inputs/ItemGameIndexCreateWithoutItemInput";
import { ItemGameIndexUpdateWithoutItemInput } from "../inputs/ItemGameIndexUpdateWithoutItemInput";
import { ItemGameIndexWhereUniqueInput } from "../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndexUpsertWithWhereUniqueWithoutItemInput", {})
export class ItemGameIndexUpsertWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndexUpdateWithoutItemInput, {
    nullable: false
  })
  update!: ItemGameIndexUpdateWithoutItemInput;

  @TypeGraphQL.Field(_type => ItemGameIndexCreateWithoutItemInput, {
    nullable: false
  })
  create!: ItemGameIndexCreateWithoutItemInput;
}
