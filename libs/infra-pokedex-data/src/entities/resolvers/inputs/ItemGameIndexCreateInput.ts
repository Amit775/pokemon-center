import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateNestedOneWithoutItemGameIndicesInput } from "../inputs/GenerationCreateNestedOneWithoutItemGameIndicesInput";
import { ItemCreateNestedOneWithoutGameIndicesInput } from "../inputs/ItemCreateNestedOneWithoutGameIndicesInput";

@TypeGraphQL.InputType("ItemGameIndexCreateInput", {})
export class ItemGameIndexCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => ItemCreateNestedOneWithoutGameIndicesInput, {
    nullable: false
  })
  item!: ItemCreateNestedOneWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationCreateNestedOneWithoutItemGameIndicesInput, {
    nullable: false
  })
  generation!: GenerationCreateNestedOneWithoutItemGameIndicesInput;
}
