import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateNestedOneWithoutGameIndicesInput } from "../inputs/ItemsCreateNestedOneWithoutGameIndicesInput";

@TypeGraphQL.InputType("ItemGameIndicesCreateWithoutGenerationInput", {})
export class ItemGameIndicesCreateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => ItemsCreateNestedOneWithoutGameIndicesInput, {
    nullable: false
  })
  item!: ItemsCreateNestedOneWithoutGameIndicesInput;
}
