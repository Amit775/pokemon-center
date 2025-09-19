import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterUpdateWithoutLocationAreaInput } from "../inputs/EncounterUpdateWithoutLocationAreaInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterUpdateWithWhereUniqueWithoutLocationAreaInput", {})
export class EncounterUpdateWithWhereUniqueWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterUpdateWithoutLocationAreaInput, {
    nullable: false
  })
  data!: EncounterUpdateWithoutLocationAreaInput;
}
