import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesCreateWithoutItemInput } from "../inputs/ItemGameIndicesCreateWithoutItemInput";
import { ItemGameIndicesWhereUniqueInput } from "../inputs/ItemGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("ItemGameIndicesCreateOrConnectWithoutItemInput", {})
export class ItemGameIndicesCreateOrConnectWithoutItemInput {
  @TypeGraphQL.Field(_type => ItemGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndicesCreateWithoutItemInput, {
    nullable: false
  })
  create!: ItemGameIndicesCreateWithoutItemInput;
}
