import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateWithoutVersionInput } from "../inputs/EncounterCreateWithoutVersionInput";
import { EncounterUpdateWithoutVersionInput } from "../inputs/EncounterUpdateWithoutVersionInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterUpsertWithWhereUniqueWithoutVersionInput", {})
export class EncounterUpsertWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterUpdateWithoutVersionInput, {
    nullable: false
  })
  update!: EncounterUpdateWithoutVersionInput;

  @TypeGraphQL.Field(_type => EncounterCreateWithoutVersionInput, {
    nullable: false
  })
  create!: EncounterCreateWithoutVersionInput;
}
