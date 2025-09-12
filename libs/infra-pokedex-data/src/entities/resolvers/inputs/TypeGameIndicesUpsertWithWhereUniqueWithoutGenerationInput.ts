import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesCreateWithoutGenerationInput } from "../inputs/TypeGameIndicesCreateWithoutGenerationInput";
import { TypeGameIndicesUpdateWithoutGenerationInput } from "../inputs/TypeGameIndicesUpdateWithoutGenerationInput";
import { TypeGameIndicesWhereUniqueInput } from "../inputs/TypeGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput", {})
export class TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeGameIndicesUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: TypeGameIndicesUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => TypeGameIndicesCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: TypeGameIndicesCreateWithoutGenerationInput;
}
