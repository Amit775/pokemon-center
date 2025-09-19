import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateWithoutLocationAreaInput } from "../inputs/EncounterCreateWithoutLocationAreaInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterCreateOrConnectWithoutLocationAreaInput", {})
export class EncounterCreateOrConnectWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterCreateWithoutLocationAreaInput, {
    nullable: false
  })
  create!: EncounterCreateWithoutLocationAreaInput;
}
