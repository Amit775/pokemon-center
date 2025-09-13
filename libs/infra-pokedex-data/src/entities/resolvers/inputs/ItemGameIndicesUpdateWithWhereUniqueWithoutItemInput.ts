import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesUpdateWithoutItemInput } from "../inputs/ItemGameIndicesUpdateWithoutItemInput";
import { ItemGameIndicesWhereUniqueInput } from "../inputs/ItemGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput", {})
export class ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndicesUpdateWithoutItemInput, {
    nullable: false
  })
  data!: ItemGameIndicesUpdateWithoutItemInput;
}
