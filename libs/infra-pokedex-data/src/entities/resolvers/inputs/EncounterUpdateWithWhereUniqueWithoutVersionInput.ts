import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterUpdateWithoutVersionInput } from "../inputs/EncounterUpdateWithoutVersionInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterUpdateWithWhereUniqueWithoutVersionInput", {})
export class EncounterUpdateWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterUpdateWithoutVersionInput, {
    nullable: false
  })
  data!: EncounterUpdateWithoutVersionInput;
}
