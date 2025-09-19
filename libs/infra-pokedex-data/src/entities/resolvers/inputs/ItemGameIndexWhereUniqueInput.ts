import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationRelationFilter } from "../inputs/GenerationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ItemGameIndexWhereInput } from "../inputs/ItemGameIndexWhereInput";
import { ItemGameIndicesItem_idGeneration_idCompoundUniqueInput } from "../inputs/ItemGameIndicesItem_idGeneration_idCompoundUniqueInput";
import { ItemRelationFilter } from "../inputs/ItemRelationFilter";

@TypeGraphQL.InputType("ItemGameIndexWhereUniqueInput", {})
export class ItemGameIndexWhereUniqueInput {
  @TypeGraphQL.Field(_type => ItemGameIndicesItem_idGeneration_idCompoundUniqueInput, {
    nullable: true
  })
  item_id_generation_id?: ItemGameIndicesItem_idGeneration_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexWhereInput], {
    nullable: true
  })
  AND?: ItemGameIndexWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexWhereInput], {
    nullable: true
  })
  OR?: ItemGameIndexWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexWhereInput], {
    nullable: true
  })
  NOT?: ItemGameIndexWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => ItemRelationFilter, {
    nullable: true
  })
  item?: ItemRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationRelationFilter, {
    nullable: true
  })
  generation?: GenerationRelationFilter | undefined;
}
