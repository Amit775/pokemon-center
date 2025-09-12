import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesCreateWithoutTypeInput } from "../inputs/TypeGameIndicesCreateWithoutTypeInput";
import { TypeGameIndicesUpdateWithoutTypeInput } from "../inputs/TypeGameIndicesUpdateWithoutTypeInput";
import { TypeGameIndicesWhereUniqueInput } from "../inputs/TypeGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput", {})
export class TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeGameIndicesUpdateWithoutTypeInput, {
    nullable: false
  })
  update!: TypeGameIndicesUpdateWithoutTypeInput;

  @TypeGraphQL.Field(_type => TypeGameIndicesCreateWithoutTypeInput, {
    nullable: false
  })
  create!: TypeGameIndicesCreateWithoutTypeInput;
}
