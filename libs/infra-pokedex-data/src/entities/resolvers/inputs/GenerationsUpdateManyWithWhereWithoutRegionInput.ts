import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsScalarWhereInput } from "../inputs/GenerationsScalarWhereInput";
import { GenerationsUpdateManyMutationInput } from "../inputs/GenerationsUpdateManyMutationInput";

@TypeGraphQL.InputType("GenerationsUpdateManyWithWhereWithoutRegionInput", {})
export class GenerationsUpdateManyWithWhereWithoutRegionInput {
  @TypeGraphQL.Field(_type => GenerationsScalarWhereInput, {
    nullable: false
  })
  where!: GenerationsScalarWhereInput;

  @TypeGraphQL.Field(_type => GenerationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: GenerationsUpdateManyMutationInput;
}
