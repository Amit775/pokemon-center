import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateNestedOneWithoutItemGameIndicesInput } from "../inputs/GenerationsCreateNestedOneWithoutItemGameIndicesInput";
import { ItemsCreateNestedOneWithoutGameIndicesInput } from "../inputs/ItemsCreateNestedOneWithoutGameIndicesInput";

@TypeGraphQL.InputType("ItemGameIndicesCreateInput", {})
export class ItemGameIndicesCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => ItemsCreateNestedOneWithoutGameIndicesInput, {
    nullable: false
  })
  item!: ItemsCreateNestedOneWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationsCreateNestedOneWithoutItemGameIndicesInput, {
    nullable: false
  })
  generation!: GenerationsCreateNestedOneWithoutItemGameIndicesInput;
}
