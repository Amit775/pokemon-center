import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesUpdateWithoutGenerationInput } from "../inputs/TypeGameIndicesUpdateWithoutGenerationInput";
import { TypeGameIndicesWhereUniqueInput } from "../inputs/TypeGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput", {})
export class TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeGameIndicesUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: TypeGameIndicesUpdateWithoutGenerationInput;
}
