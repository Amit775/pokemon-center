import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateManyLocationAreaInput } from "../inputs/EncounterCreateManyLocationAreaInput";

@TypeGraphQL.InputType("EncounterCreateManyLocationAreaInputEnvelope", {})
export class EncounterCreateManyLocationAreaInputEnvelope {
  @TypeGraphQL.Field(_type => [EncounterCreateManyLocationAreaInput], {
    nullable: false
  })
  data!: EncounterCreateManyLocationAreaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
