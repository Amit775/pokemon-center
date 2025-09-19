import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateNestedOneWithoutTypeGameIndicesInput } from "../inputs/GenerationCreateNestedOneWithoutTypeGameIndicesInput";

@TypeGraphQL.InputType("TypeGameIndexCreateWithoutTypeInput", {})
export class TypeGameIndexCreateWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => GenerationCreateNestedOneWithoutTypeGameIndicesInput, {
    nullable: false
  })
  generation!: GenerationCreateNestedOneWithoutTypeGameIndicesInput;
}
