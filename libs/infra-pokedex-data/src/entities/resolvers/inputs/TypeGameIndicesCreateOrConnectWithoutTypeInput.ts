import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesCreateWithoutTypeInput } from "../inputs/TypeGameIndicesCreateWithoutTypeInput";
import { TypeGameIndicesWhereUniqueInput } from "../inputs/TypeGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndicesCreateOrConnectWithoutTypeInput", {})
export class TypeGameIndicesCreateOrConnectWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeGameIndicesCreateWithoutTypeInput, {
    nullable: false
  })
  create!: TypeGameIndicesCreateWithoutTypeInput;
}
