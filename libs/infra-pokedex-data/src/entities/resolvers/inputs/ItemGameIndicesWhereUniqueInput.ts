import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsRelationFilter } from "../inputs/GenerationsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ItemGameIndicesItem_idGeneration_idCompoundUniqueInput } from "../inputs/ItemGameIndicesItem_idGeneration_idCompoundUniqueInput";
import { ItemGameIndicesWhereInput } from "../inputs/ItemGameIndicesWhereInput";
import { ItemsRelationFilter } from "../inputs/ItemsRelationFilter";

@TypeGraphQL.InputType("ItemGameIndicesWhereUniqueInput", {})
export class ItemGameIndicesWhereUniqueInput {
  @TypeGraphQL.Field(_type => ItemGameIndicesItem_idGeneration_idCompoundUniqueInput, {
    nullable: true
  })
  item_id_generation_id?: ItemGameIndicesItem_idGeneration_idCompoundUniqueInput | undefined;

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
