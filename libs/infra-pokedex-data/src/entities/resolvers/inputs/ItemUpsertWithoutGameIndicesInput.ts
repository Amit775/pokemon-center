import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutGameIndicesInput } from "../inputs/ItemCreateWithoutGameIndicesInput";
import { ItemUpdateWithoutGameIndicesInput } from "../inputs/ItemUpdateWithoutGameIndicesInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpsertWithoutGameIndicesInput", {})
export class ItemUpsertWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => ItemUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  update!: ItemUpdateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutGameIndicesInput, {
    nullable: false
  })
  create!: ItemCreateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;
}
