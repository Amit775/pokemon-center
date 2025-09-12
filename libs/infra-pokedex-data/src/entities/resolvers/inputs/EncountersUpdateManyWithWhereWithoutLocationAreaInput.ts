import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersScalarWhereInput } from "../inputs/EncountersScalarWhereInput";
import { EncountersUpdateManyMutationInput } from "../inputs/EncountersUpdateManyMutationInput";

@TypeGraphQL.InputType("EncountersUpdateManyWithWhereWithoutLocationAreaInput", {})
export class EncountersUpdateManyWithWhereWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => EncountersScalarWhereInput, {
    nullable: false
  })
  where!: EncountersScalarWhereInput;

  @TypeGraphQL.Field(_type => EncountersUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncountersUpdateManyMutationInput;
}
