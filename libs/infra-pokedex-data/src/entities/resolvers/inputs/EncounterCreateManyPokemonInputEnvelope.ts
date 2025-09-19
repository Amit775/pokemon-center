import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateManyPokemonInput } from "../inputs/EncounterCreateManyPokemonInput";

@TypeGraphQL.InputType("EncounterCreateManyPokemonInputEnvelope", {})
export class EncounterCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [EncounterCreateManyPokemonInput], {
    nullable: false
  })
  data!: EncounterCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
