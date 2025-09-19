import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateNestedOneWithoutGameIndicesInput } from "../inputs/TypeCreateNestedOneWithoutGameIndicesInput";

@TypeGraphQL.InputType("TypeGameIndexCreateWithoutGenerationInput", {})
export class TypeGameIndexCreateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => TypeCreateNestedOneWithoutGameIndicesInput, {
    nullable: false
  })
  type!: TypeCreateNestedOneWithoutGameIndicesInput;
}
