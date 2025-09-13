import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateWithoutVersionInput } from "../inputs/EncountersCreateWithoutVersionInput";
import { EncountersUpdateWithoutVersionInput } from "../inputs/EncountersUpdateWithoutVersionInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersUpsertWithWhereUniqueWithoutVersionInput", {})
export class EncountersUpsertWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncountersUpdateWithoutVersionInput, {
    nullable: false
  })
  update!: EncountersUpdateWithoutVersionInput;

  @TypeGraphQL.Field(_type => EncountersCreateWithoutVersionInput, {
    nullable: false
  })
  create!: EncountersCreateWithoutVersionInput;
}
