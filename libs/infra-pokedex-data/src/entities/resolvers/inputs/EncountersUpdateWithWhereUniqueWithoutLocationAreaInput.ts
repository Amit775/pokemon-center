import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersUpdateWithoutLocationAreaInput } from "../inputs/EncountersUpdateWithoutLocationAreaInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersUpdateWithWhereUniqueWithoutLocationAreaInput", {})
export class EncountersUpdateWithWhereUniqueWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncountersUpdateWithoutLocationAreaInput, {
    nullable: false
  })
  data!: EncountersUpdateWithoutLocationAreaInput;
}
