import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsRelationFilter } from "../inputs/GenerationsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ItemsRelationFilter } from "../inputs/ItemsRelationFilter";

@TypeGraphQL.InputType("ItemGameIndicesWhereInput", {})
export class ItemGameIndicesWhereInput {
  @TypeGraphQL.Field(_type => [ItemGameIndicesWhereInput], {
    nullable: true
  })
  AND?: ItemGameIndicesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesWhereInput], {
    nullable: true
  })
  OR?: ItemGameIndicesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesWhereInput], {
    nullable: true
  })
  NOT?: ItemGameIndicesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  item_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ItemsRelationFilter, {
    nullable: true
  })
  item?: ItemsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationsRelationFilter, {
    nullable: true
  })
  generation?: GenerationsRelationFilter | undefined;
}
