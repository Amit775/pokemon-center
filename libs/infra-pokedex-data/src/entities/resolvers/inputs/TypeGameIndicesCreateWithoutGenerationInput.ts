import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateNestedOneWithoutGameIndicesInput } from "../inputs/TypesCreateNestedOneWithoutGameIndicesInput";

@TypeGraphQL.InputType("TypeGameIndicesCreateWithoutGenerationInput", {})
export class TypeGameIndicesCreateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => TypesCreateNestedOneWithoutGameIndicesInput, {
    nullable: false
  })
  type!: TypesCreateNestedOneWithoutGameIndicesInput;
}
