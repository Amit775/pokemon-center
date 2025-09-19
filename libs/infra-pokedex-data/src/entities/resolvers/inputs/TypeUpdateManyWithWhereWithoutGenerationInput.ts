import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeScalarWhereInput } from "../inputs/TypeScalarWhereInput";
import { TypeUpdateManyMutationInput } from "../inputs/TypeUpdateManyMutationInput";

@TypeGraphQL.InputType("TypeUpdateManyWithWhereWithoutGenerationInput", {})
export class TypeUpdateManyWithWhereWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeScalarWhereInput, {
    nullable: false
  })
  where!: TypeScalarWhereInput;

  @TypeGraphQL.Field(_type => TypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: TypeUpdateManyMutationInput;
}
