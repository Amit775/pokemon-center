import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateNestedOneWithoutTypeGameIndicesInput } from "../inputs/GenerationsCreateNestedOneWithoutTypeGameIndicesInput";

@TypeGraphQL.InputType("TypeGameIndicesCreateWithoutTypeInput", {})
export class TypeGameIndicesCreateWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => GenerationsCreateNestedOneWithoutTypeGameIndicesInput, {
    nullable: false
  })
  generation!: GenerationsCreateNestedOneWithoutTypeGameIndicesInput;
}
