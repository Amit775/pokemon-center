import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesScalarWhereInput } from "../inputs/AbilitiesScalarWhereInput";
import { AbilitiesUpdateManyMutationInput } from "../inputs/AbilitiesUpdateManyMutationInput";

@TypeGraphQL.InputType("AbilitiesUpdateManyWithWhereWithoutGenerationInput", {})
export class AbilitiesUpdateManyWithWhereWithoutGenerationInput {
  @TypeGraphQL.Field(_type => AbilitiesScalarWhereInput, {
    nullable: false
  })
  where!: AbilitiesScalarWhereInput;

  @TypeGraphQL.Field(_type => AbilitiesUpdateManyMutationInput, {
    nullable: false
  })
  data!: AbilitiesUpdateManyMutationInput;
}
