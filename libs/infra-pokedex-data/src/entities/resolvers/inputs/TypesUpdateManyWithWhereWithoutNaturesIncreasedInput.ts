import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesScalarWhereInput } from "../inputs/TypesScalarWhereInput";
import { TypesUpdateManyMutationInput } from "../inputs/TypesUpdateManyMutationInput";

@TypeGraphQL.InputType("TypesUpdateManyWithWhereWithoutNaturesIncreasedInput", {})
export class TypesUpdateManyWithWhereWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => TypesScalarWhereInput, {
    nullable: false
  })
  where!: TypesScalarWhereInput;

  @TypeGraphQL.Field(_type => TypesUpdateManyMutationInput, {
    nullable: false
  })
  data!: TypesUpdateManyMutationInput;
}
