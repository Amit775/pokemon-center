import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersUpdateWithoutVersionInput } from "../inputs/EncountersUpdateWithoutVersionInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersUpdateWithWhereUniqueWithoutVersionInput", {})
export class EncountersUpdateWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncountersUpdateWithoutVersionInput, {
    nullable: false
  })
  data!: EncountersUpdateWithoutVersionInput;
}
