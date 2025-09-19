import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexScalarWhereInput } from "../inputs/TypeGameIndexScalarWhereInput";
import { TypeGameIndexUpdateManyMutationInput } from "../inputs/TypeGameIndexUpdateManyMutationInput";

@TypeGraphQL.InputType("TypeGameIndexUpdateManyWithWhereWithoutGenerationInput", {})
export class TypeGameIndexUpdateManyWithWhereWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGameIndexScalarWhereInput, {
    nullable: false
  })
  where!: TypeGameIndexScalarWhereInput;

  @TypeGraphQL.Field(_type => TypeGameIndexUpdateManyMutationInput, {
    nullable: false
  })
  data!: TypeGameIndexUpdateManyMutationInput;
}
