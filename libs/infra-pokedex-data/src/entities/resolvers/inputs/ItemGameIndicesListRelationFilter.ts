import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesWhereInput } from "../inputs/ItemGameIndicesWhereInput";

@TypeGraphQL.InputType("ItemGameIndicesListRelationFilter", {})
export class ItemGameIndicesListRelationFilter {
  @TypeGraphQL.Field(_type => ItemGameIndicesWhereInput, {
    nullable: true
  })
  every?: ItemGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesWhereInput, {
    nullable: true
  })
  some?: ItemGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesWhereInput, {
    nullable: true
  })
  none?: ItemGameIndicesWhereInput | undefined;
}
