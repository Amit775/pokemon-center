import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateManyLocationAreaInputEnvelope } from "../inputs/EncounterCreateManyLocationAreaInputEnvelope";
import { EncounterCreateOrConnectWithoutLocationAreaInput } from "../inputs/EncounterCreateOrConnectWithoutLocationAreaInput";
import { EncounterCreateWithoutLocationAreaInput } from "../inputs/EncounterCreateWithoutLocationAreaInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterCreateNestedManyWithoutLocationAreaInput", {})
export class EncounterCreateNestedManyWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => [EncounterCreateWithoutLocationAreaInput], {
    nullable: true
  })
  create?: EncounterCreateWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterCreateOrConnectWithoutLocationAreaInput], {
    nullable: true
  })
  connectOrCreate?: EncounterCreateOrConnectWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterCreateManyLocationAreaInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterCreateManyLocationAreaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterWhereUniqueInput[] | undefined;
}
