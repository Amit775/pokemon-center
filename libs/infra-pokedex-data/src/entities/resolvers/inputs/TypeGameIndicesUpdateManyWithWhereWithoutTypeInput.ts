import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesScalarWhereInput } from "../inputs/TypeGameIndicesScalarWhereInput";
import { TypeGameIndicesUpdateManyMutationInput } from "../inputs/TypeGameIndicesUpdateManyMutationInput";

@TypeGraphQL.InputType("TypeGameIndicesUpdateManyWithWhereWithoutTypeInput", {})
export class TypeGameIndicesUpdateManyWithWhereWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGameIndicesScalarWhereInput, {
    nullable: false
  })
  where!: TypeGameIndicesScalarWhereInput;

  @TypeGraphQL.Field(_type => TypeGameIndicesUpdateManyMutationInput, {
    nullable: false
  })
  data!: TypeGameIndicesUpdateManyMutationInput;
}
