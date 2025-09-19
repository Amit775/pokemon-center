import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateManyVersionInputEnvelope } from "../inputs/EncounterCreateManyVersionInputEnvelope";
import { EncounterCreateOrConnectWithoutVersionInput } from "../inputs/EncounterCreateOrConnectWithoutVersionInput";
import { EncounterCreateWithoutVersionInput } from "../inputs/EncounterCreateWithoutVersionInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterCreateNestedManyWithoutVersionInput", {})
export class EncounterCreateNestedManyWithoutVersionInput {
  @TypeGraphQL.Field(_type => [EncounterCreateWithoutVersionInput], {
    nullable: true
  })
  create?: EncounterCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: EncounterCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterCreateManyVersionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterWhereUniqueInput[] | undefined;
}
