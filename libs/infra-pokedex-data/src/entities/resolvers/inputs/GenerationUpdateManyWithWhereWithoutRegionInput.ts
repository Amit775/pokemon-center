import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationScalarWhereInput } from "../inputs/GenerationScalarWhereInput";
import { GenerationUpdateManyMutationInput } from "../inputs/GenerationUpdateManyMutationInput";

@TypeGraphQL.InputType("GenerationUpdateManyWithWhereWithoutRegionInput", {})
export class GenerationUpdateManyWithWhereWithoutRegionInput {
  @TypeGraphQL.Field(_type => GenerationScalarWhereInput, {
    nullable: false
  })
  where!: GenerationScalarWhereInput;

  @TypeGraphQL.Field(_type => GenerationUpdateManyMutationInput, {
    nullable: false
  })
  data!: GenerationUpdateManyMutationInput;
}
