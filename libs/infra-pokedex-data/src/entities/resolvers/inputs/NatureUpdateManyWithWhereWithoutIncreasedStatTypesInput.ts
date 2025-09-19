import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureScalarWhereInput } from "../inputs/NatureScalarWhereInput";
import { NatureUpdateManyMutationInput } from "../inputs/NatureUpdateManyMutationInput";

@TypeGraphQL.InputType("NatureUpdateManyWithWhereWithoutIncreasedStatTypesInput", {})
export class NatureUpdateManyWithWhereWithoutIncreasedStatTypesInput {
  @TypeGraphQL.Field(_type => NatureScalarWhereInput, {
    nullable: false
  })
  where!: NatureScalarWhereInput;

  @TypeGraphQL.Field(_type => NatureUpdateManyMutationInput, {
    nullable: false
  })
  data!: NatureUpdateManyMutationInput;
}
