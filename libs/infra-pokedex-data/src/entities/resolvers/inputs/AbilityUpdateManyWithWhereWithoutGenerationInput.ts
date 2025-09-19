import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityScalarWhereInput } from "../inputs/AbilityScalarWhereInput";
import { AbilityUpdateManyMutationInput } from "../inputs/AbilityUpdateManyMutationInput";

@TypeGraphQL.InputType("AbilityUpdateManyWithWhereWithoutGenerationInput", {})
export class AbilityUpdateManyWithWhereWithoutGenerationInput {
  @TypeGraphQL.Field(_type => AbilityScalarWhereInput, {
    nullable: false
  })
  where!: AbilityScalarWhereInput;

  @TypeGraphQL.Field(_type => AbilityUpdateManyMutationInput, {
    nullable: false
  })
  data!: AbilityUpdateManyMutationInput;
}
