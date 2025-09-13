import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesCreateWithoutGenerationInput } from "../inputs/TypeGameIndicesCreateWithoutGenerationInput";
import { TypeGameIndicesWhereUniqueInput } from "../inputs/TypeGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndicesCreateOrConnectWithoutGenerationInput", {})
export class TypeGameIndicesCreateOrConnectWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeGameIndicesCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: TypeGameIndicesCreateWithoutGenerationInput;
}
