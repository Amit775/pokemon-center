import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateWithoutLocationAreaInput } from "../inputs/EncounterCreateWithoutLocationAreaInput";
import { EncounterUpdateWithoutLocationAreaInput } from "../inputs/EncounterUpdateWithoutLocationAreaInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterUpsertWithWhereUniqueWithoutLocationAreaInput", {})
export class EncounterUpsertWithWhereUniqueWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterUpdateWithoutLocationAreaInput, {
    nullable: false
  })
  update!: EncounterUpdateWithoutLocationAreaInput;

  @TypeGraphQL.Field(_type => EncounterCreateWithoutLocationAreaInput, {
    nullable: false
  })
  create!: EncounterCreateWithoutLocationAreaInput;
}
