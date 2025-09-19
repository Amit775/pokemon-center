import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateWithoutVersionInput } from "../inputs/EncounterCreateWithoutVersionInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterCreateOrConnectWithoutVersionInput", {})
export class EncounterCreateOrConnectWithoutVersionInput {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterCreateWithoutVersionInput, {
    nullable: false
  })
  create!: EncounterCreateWithoutVersionInput;
}
