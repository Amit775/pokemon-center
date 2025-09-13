import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutGameIndicesInput } from "../inputs/ItemsCreateWithoutGameIndicesInput";
import { ItemsUpdateWithoutGameIndicesInput } from "../inputs/ItemsUpdateWithoutGameIndicesInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpsertWithoutGameIndicesInput", {})
export class ItemsUpsertWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => ItemsUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  update!: ItemsUpdateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutGameIndicesInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;
}
