import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateManyPokemonInput } from "../inputs/EncountersCreateManyPokemonInput";

@TypeGraphQL.InputType("EncountersCreateManyPokemonInputEnvelope", {})
export class EncountersCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [EncountersCreateManyPokemonInput], {
    nullable: false
  })
  data!: EncountersCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
