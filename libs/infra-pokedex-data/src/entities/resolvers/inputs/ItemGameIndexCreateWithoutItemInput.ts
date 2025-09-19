import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateNestedOneWithoutItemGameIndicesInput } from "../inputs/GenerationCreateNestedOneWithoutItemGameIndicesInput";

@TypeGraphQL.InputType("ItemGameIndexCreateWithoutItemInput", {})
export class ItemGameIndexCreateWithoutItemInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => GenerationCreateNestedOneWithoutItemGameIndicesInput, {
    nullable: false
  })
  generation!: GenerationCreateNestedOneWithoutItemGameIndicesInput;
}
