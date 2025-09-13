import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ItemGameIndicesScalarWhereInput", {})
export class ItemGameIndicesScalarWhereInput {
  @TypeGraphQL.Field(_type => [ItemGameIndicesScalarWhereInput], {
    nullable: true
  })
  AND?: ItemGameIndicesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesScalarWhereInput], {
    nullable: true
  })
  OR?: ItemGameIndicesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesScalarWhereInput], {
    nullable: true
  })
  NOT?: ItemGameIndicesScalarWhereInput[] | undefined;

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
}
