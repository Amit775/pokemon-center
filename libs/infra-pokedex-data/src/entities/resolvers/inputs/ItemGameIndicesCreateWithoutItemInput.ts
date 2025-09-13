import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateNestedOneWithoutItemGameIndicesInput } from "../inputs/GenerationsCreateNestedOneWithoutItemGameIndicesInput";

@TypeGraphQL.InputType("ItemGameIndicesCreateWithoutItemInput", {})
export class ItemGameIndicesCreateWithoutItemInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => GenerationsCreateNestedOneWithoutItemGameIndicesInput, {
    nullable: false
  })
  generation!: GenerationsCreateNestedOneWithoutItemGameIndicesInput;
}
