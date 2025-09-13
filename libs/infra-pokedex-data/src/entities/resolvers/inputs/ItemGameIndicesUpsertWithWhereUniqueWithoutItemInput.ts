import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesCreateWithoutItemInput } from "../inputs/ItemGameIndicesCreateWithoutItemInput";
import { ItemGameIndicesUpdateWithoutItemInput } from "../inputs/ItemGameIndicesUpdateWithoutItemInput";
import { ItemGameIndicesWhereUniqueInput } from "../inputs/ItemGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput", {})
export class ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndicesUpdateWithoutItemInput, {
    nullable: false
  })
  update!: ItemGameIndicesUpdateWithoutItemInput;

  @TypeGraphQL.Field(_type => ItemGameIndicesCreateWithoutItemInput, {
    nullable: false
  })
  create!: ItemGameIndicesCreateWithoutItemInput;
}
